import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Login_component() {
  const navigate = useNavigate();
  const [username, setName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/admin/loginadmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        jToken: localStorage.getItem("jToken"),
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success === true) {
      setTimeout(() => {
        toast.success("Login Successfully", {
          position: "top-center",
        });
      }, 100);
      setTimeout(() => {
        navigate("/home", { replace: true });
      }, 2000);
    } else {
      toast.warn("Invalid Credentials", {
        position: "top-center",
      });
    }
  };
  return (
    <>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Module Name"
            required
            value={username}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Don't have account ? <a href="/sign-up">Sign Up</a>
        </p>
        <ToastContainer />
      </form>
    </>
  );
}

export default Login_component;

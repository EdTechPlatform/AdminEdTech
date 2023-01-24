// import React, { Component } from "react";

// export default class SignUp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       password: "",
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleSubmit(e) {
//     e.preventDefault();
//     const { username, password } = this.state;
//     console.log(username, password);
//     fetch("http://localhost:5000/admin/createadmin", {
//       method: "POST",
//       crossDomain: true,
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//       body: JSON.stringify({

//         username,
//         password,

//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data, "userRegister");
//       });
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <h3>Sign Up</h3>

//         <div className="mb-3">
//           <label>Username</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter Username"
//             required
//             onChange={(e) => this.setState({ username: e.target.value })}
//           />
//         </div>

//         <div className="mb-3">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//             required
//             onChange={(e) => this.setState({ password: e.target.value })}
//           />
//         </div>
//         <div className="d-grid">
//           <button type="submit" className="btn btn-primary">
//             Sign Up
//           </button>
//         </div>
//         <p className="forgot-password text-right">
//           Already registered <a href="/sign-in">sign in?</a>
//         </p>
//       </form>
//     );
//   }
// }

import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Signup_component() {
  const navigate = useNavigate();
  const [username, setName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/admin/createadmin", {
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
        toast.success("SignUp Successfully", {
          position: "top-center",
        });
      }, 100);
      setTimeout(() => {
        navigate("/sign-in", { replace: true });
      }, 2000);
    } else {
      toast.warn("Invalid Credentials", {
        position: "top-center",
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Username"
            required
            value={username}
            onChange={(e) => setName(e.target.value )}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
        <ToastContainer />
      </form>
    </div>
  );
}

export default Signup_component;

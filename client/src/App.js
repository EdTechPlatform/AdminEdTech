import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./componets/home/index";
import TutoriaTrack from "./componets/tutorialTrack/index.js";

import Login from "./componets/authPage/login_component";
import SignUp from "./componets/authPage/signup_component";
import UserDetails from "./componets/authPage/userDetails";
import VideoPlayer from "./componets/videoplayer";
import TestRoute from "./componets/testRoute"
import TutorialPage from "./componets/tutorialTrack/tutorialPage.js";
import ModuleVideoPage from "./componets/tutorialTrack/moduleVideoPage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route exact path="/" element={<Login />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/userDetails" element={<UserDetails />} />
        <Route path="/account/tutorial" element={<TutoriaTrack/>} />
        <Route path="/account/tutorial/tutorialPage" element={<TutorialPage/>} />
        <Route path="/account/testroute" element={<TestRoute/>} />
        <Route path="/account/tutorial/tutorialPage/modulevideo" element={<ModuleVideoPage/>} />
        {/* <Route path="/account/tutorial/module" element={<Consult/>} /> */}
        <Route path="/account/tutorial/consult/course" element={<VideoPlayer/>} />
      </Routes>
    </div>
  );
}

export default App;

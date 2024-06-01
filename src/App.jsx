import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import Main from "../components/Main";

import Overview from "../pages/Overview";
import Tracks from "../pages/Tracks";
import Submission from "../pages/Submission";
import Committee from "../pages/Committee";
import Schedule from "../pages/Schedule";
import Registration from "../pages/Registration";
import Call from "../pages/Call";
import Contact from "../pages/Contact";

const App = () => {
  const MainContent = () => {
    const location = useLocation();
    return location.pathname === "/" ? <Main /> : null;
  };
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Overview />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/submission" element={<Submission />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/call" element={<Call />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <MainContent />
      </Router>
    </>
  );
};

export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Resume from "./pages/Resume";
import Admin from "./pages/Admin";
import ResumePreview from "./pages/ResumePreview";
import "./App.css"
import Footer from "./Components/Footer";
function App () {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/resume-preview" element={<ResumePreview/>} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import CV from "./CV"; // Import the CV component
import "./Pages/App.css";

function App() {
  return (
    <Router basename="tothepoint_latet-portfolio">
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cv" element={<CV />} /> {/* Add route for CV */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

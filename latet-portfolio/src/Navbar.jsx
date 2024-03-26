import React, { useState } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll'; // Import animateScroll from react-scroll
import "./Styles/Navbar.css";
import logoImg from "./assets/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    scroll.scrollToTop();
    setIsMenuOpen(false); // Close the menu after scrolling
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoImg} alt="Logo" />
      </div>
      <div className={`menu ${isMenuOpen ? "active" : ""}`}>
        <ul>
          {/* Use onClick to trigger scrollToTop function */}
          <li>
            <Link to="/" className="nav-link" onClick={scrollToTop}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="nav-link" onClick={toggleMenu}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`hamburger-icon ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;

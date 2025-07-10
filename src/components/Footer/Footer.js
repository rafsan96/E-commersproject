import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const quotes = [
    "You can have anything you want in life if you dress for it.",
    "Style is a way to say who you are without having to speak.",
    "Fashion is the armor to survive the reality of everyday life.",
    "I don't design clothes. I design dreams.",
    "People will stare. Make it worth their while.",
    "Elegance is not standing out, but being remembered.",
    "The joy of dressing is an art.",
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <footer className="footer">
      <div className="quote">
        <h3>"{randomQuote}"</h3>
      </div>
      <div className="footer-content">
        <div className="social-links">
          <Link to="/" aria-label="Facebook">
            <i className="fa fa-facebook"></i>
          </Link>
          <a href="#" aria-label="Twitter">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#" aria-label="YouTube">
            <i className="fa fa-youtube"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Trends. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

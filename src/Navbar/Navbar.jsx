import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation(); // 👈 get current route path

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container p-3 px-4 ">
        <Link to="/" className="navbar-brand text-white">
          Start Framework
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item ms-lg-3">
              <Link
                to="/about"
                className={`nav-link text-white text-uppercase ${
                  location.pathname === "/about" ? "active" : ""
                }`}
              >
                about
              </Link>
            </li>
            <li className="nav-item ms-lg-3">
              <Link
                to="/portfolio"
                className={`nav-link text-white text-uppercase ${
                  location.pathname === "/portfolio" ? "active" : ""
                }`}
              >
                portfolio
              </Link>
            </li>
            <li className="nav-item ms-lg-3">
              <Link
                to="/contact"
                className={`nav-link text-white text-uppercase ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

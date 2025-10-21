import React from "react";
import './Footer.css';

export default function Footer() {
  return (
    <>
      <footer className="bg-body-tertiary text-center text-lg-start">
        <div className="p-5" style={{ backgroundColor: "#2C3E50" }}>
          <div className="row text-white m-auto px-5">
            <div className="col-lg-4 mb-4 text-center py-2 px-4">
              <h5 className="text-uppercase">LOCATION</h5>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>

            <div className="col-lg-4 mb-4 text-center py-2 px-4">
              <h5 className="text-uppercase">AROUND THE WEB</h5>
              <ul className="list-unstyled mb-0 d-flex justify-content-center gap-2 mt-3">
                <li>
                  <a
                    href="#"
                      className="text-white border border-1 border-light rounded-circle d-flex align-items-center justify-content-center text-decoration-none"
        style={{
          width: "40px",
          height: "40px",
        }}
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                      className="text-white border border-1 border-light rounded-circle d-flex align-items-center justify-content-center text-decoration-none"
        style={{
          width: "40px",
          height: "40px",
        }}
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                      className="text-white border border-1 border-light rounded-circle d-flex align-items-center justify-content-center text-decoration-none"
        style={{
          width: "40px",
          height: "40px",
        }}
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                      className="text-white border border-1 border-light rounded-circle d-flex align-items-center justify-content-center text-decoration-none"
        style={{
          width: "40px",
          height: "40px",
        }}
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-globe"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 mb-4 text-center py-2 px-4">
              <h5 className="text-uppercase mb-0">ABOUT FREELANCER</h5>
              <p className="mt-3">
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>

        <div
          className="text-center text-white p-4 py-4"
          style={{ backgroundColor: "#1a252f" }}
        >
          Copyright © Your Website 2021
        </div>
      </footer>
    </>
  );
}

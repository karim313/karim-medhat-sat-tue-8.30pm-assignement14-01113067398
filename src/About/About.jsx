import React from "react";
import './About.css'
import LineComponent from "../LineComponent/LineComponent";
import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    document.title = "About"; // 👈 change title
  }, []);
  return (
    <>
      <div
        id="about"
        className="about mt-3 vh-100 d-flex align-items-center justify-content-center "
      >
        <div className="container w-75 m-auto">
          <h2 className="AboutTitile text-uppercase text-white m-auto text-center">
            about component
          </h2>
         <LineComponent color={'white'}/>
          <div className="row">
            <div className="col-md-6">
              <p className="text-white">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6">
              <p className="text-white">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

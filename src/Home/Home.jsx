import React from "react";
import "./Home.css";
import LineComponent from "../LineComponent/LineComponent";
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.title = "Home"; // 👈 change title
  }, []);
  return (
    <>
      <div className="home d-flex align-items-center pt-3 vh-100 justify-content-center " id="Home">
        <div className="container mt-5 text-center text-white d-flex flex-column gap-3 ">
          <div className="row text-center justify-content-center">
            <picture className="col-md-5 col-sm-2">
              <img
                src="/images/avataaars.svg"
                alt="avatar"
                className="img-fluid w-50"
              />
            </picture>
          </div>

          <h2 className="mt-3 text-uppercase">Start Framework</h2>
          <LineComponent color={'white'}/>
          
          <p className="mb-5 px-3">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import "./Contact.css";
import LineComponent from "../LineComponent/LineComponent";
import { useEffect } from 'react'

export default function Contact() {
  const [empty, setEmpty] = useState([true, true, true, true]);
  useEffect(() => {
    document.title = "Contact"; // 👈 change title
  }, []);
  return (
    <>
      <div
        className="container pt-5 d-flex flex-column pb-5 mb-5"
        
        style={{ marginTop: "70px" }}
      >
        <h2 className="text-center text-uppercase mt-3">Contact Section</h2>
        <LineComponent color={"#2C3E50"} />
        <LineComponent color="white" />

        <div className="w-75 m-auto text-center d-flex flex-column gap-4">

          {/* userName */}
          <div className="position-relative p-2">
          <div className={`${empty[0] ? "inp-container" : "appear-label"} d-flex flex-column gap-2`}>
            <label
              htmlFor="userName"
              className="text-start w-75 m-auto"
              style={{ color: "#1ABC9C", transition: "all 0.5s" }}
            >
              userName:
            </label>
            <input
              id="userName"
              type="text"
              placeholder="UserName"
              className="shadow-sm m-auto p-2 w-75 border-0"
              onChange={(e) => {
                const newArr = [...empty];
                newArr[0] = e.target.value.trim() === "";
                setEmpty(newArr);
              }}
            />
          </div>

          </div>

          {/* userAge */}
          <div className="position-relative p-2">
          <div className={`${empty[1] ? "inp-container" : "appear-label"} d-flex flex-column gap-2`}>
            <label htmlFor="userAge" className="text-start w-75 m-auto" style={{ color: "#1ABC9C" }}>
              userAge:
            </label>
            <input
              id="userAge"
              type="text"
              placeholder="UserAge"
              className="shadow-sm m-auto p-2 w-75 border-0"
              onChange={(e) => {
                const newArr = [...empty];
                newArr[1] = e.target.value.trim() === "";
                setEmpty(newArr);
              }}
            />
          </div>

          </div>

          {/* userEmail */}
          <div className="position-relative p-2">
          <div className={`${empty[2] ? "inp-container" : "appear-label"} d-flex flex-column gap-2`}>
            <label htmlFor="userEmail" className="text-start w-75 m-auto" style={{ color: "#1ABC9C" }}>
              userEmail:
            </label>
            <input
              id="userEmail"
              type="text"
              placeholder="UserEmail"
              className="shadow-sm m-auto p-2 w-75 border-0"
              onChange={(e) => {
                const newArr = [...empty];
                newArr[2] = e.target.value.trim() === "";
                setEmpty(newArr);
              }}
            />
          </div>

          </div>


          {/* userPassword */}
          <div className="position-relative p-2">
          <div className={`${empty[3] ? "inp-container" : "appear-label"} d-flex flex-column gap-2`}>
            <label htmlFor="userPassword" className="text-start w-75 m-auto" style={{ color: "#1ABC9C" }}>
              userPassword:
            </label>
            <input
              id="userPassword"
              type="text"
              placeholder="UserPassword"
              className="shadow-sm m-auto p-2 w-75 border-0"
              onChange={(e) => {
                const newArr = [...empty];
                newArr[3] = e.target.value.trim() === "";
                setEmpty(newArr);
              }}
            />
          </div>

          </div>
          <div className="w-75 m-auto text-start">
          <button type="button" class="px-4 py-2 border-0 rounded-3 text-white" style={{backgroundColor:"#1ABC9C"}}>send Message</button>
          </div>
        </div>
      </div>
    </>
  );
}

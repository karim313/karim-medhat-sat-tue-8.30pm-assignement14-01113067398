import React from 'react'

export default function LineComponent({ color }) {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center mb-1">
        <div
          className="line me-3"
          style={{
            backgroundColor: color || "white",
            height: "3px",
            width: "100px",
          }}
        ></div>
        <i
          className="fa-solid fa-star"
          style={{ color: color || "white" }}
        ></i>
        <div
          className="line ms-3"
          style={{
            backgroundColor: color || "white",
            height: "3px",
            width: "100px",
          }}
        ></div>
      </div>
    </>
  );
}

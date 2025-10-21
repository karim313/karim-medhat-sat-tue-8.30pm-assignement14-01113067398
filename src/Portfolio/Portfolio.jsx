import React, { useState } from 'react';
import LineComponent from '../LineComponent/LineComponent';
import './Portfolio.css';
import Modal from './Modal/Modal';
import { useEffect } from 'react'


export default function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio"; // 👈 change title
  }, []);
  const [images, setImages] = useState([
    { src: "../../public/images/poert1.png" },
    { src: "../../public/images/port2.png" },
    { src: "../../public/images/port3.png" },
    { src: "../../public/images/poert1.png" },
    { src: "../../public/images/port2.png" },
    { src: "../../public/images/port3.png" },
  ]);

  const [showModel, setShowModel] = useState(false);
  const [mysrc, setMySrc] = useState('');

  return (
    <>
    {showModel && <Modal src={mysrc} opac={1} onClose={() => setShowModel(false)} />}
      <div
        className="container pt-5 d-flex flex-column"
        style={{ marginTop: "70px" }}
        id="portfolio"
        onClick={(e) => {
                  e.stopPropagation(); // يمنع إغلاق المودال عند الضغط على الصورة
                  setShowModel(false);
                }}
      >
        <h2 className="text-center">Portfolio Component</h2>
        <LineComponent color={'#2C3E50'} />
        <div className="row mt-3">
          {images.map((img, index) => (
            <div className="col-md-4 p-4" key={index}>
              <figure
                onClick={(e) => {
                  e.stopPropagation(); // يمنع إغلاق المودال عند الضغط على الصورة
                  setShowModel(true);
                  setMySrc(img.src);
                }}
              >
                <img src={img.src} alt="" className="w-100 rounded-3" />
                <div className="icon-add d-flex align-items-center justify-content-center rounded-3">
                  <i className="fa-solid fa-plus text-white fa-2xl"></i>
                </div>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

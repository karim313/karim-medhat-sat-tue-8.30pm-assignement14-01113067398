import React from 'react'
import './Modal.css'

export default function Modal({src,opac,onClose}) {
  
  return (
    <>
      <div className="modal-overlay " style={{opacity:opac}} id="modal d-flex align-items-center justify-content-center" onClick={onClose}>
        <div className="modal-content p-4 rounded-3" onClick={(e)=>e.stopPropagation()}>
          <figure>
            <img src={src} alt="" className="w-100 rounded-3" />
          </figure>
        </div>
      </div>
    </>
  )
}

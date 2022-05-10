import React from "react";
import "./CSS/ModalCSS.css";
// include styles

const Modal = ({ open, val, openModalState }) => {
  if (open) {
    return (
      <div className="backdrop">
        <div className="modalInfo">
          <button onClick={openModalState(false)}>click</button>
          <div className="container">
            <div className="left-container">
              <img src={val.sprites.other.dream_world.front_default} alt="pokemon"></img>
            </div>
            <div className="right-container">
              <section class="title">
                <h1> {val.name}</h1>
              </section>
              <section class="properties">
                <h2>Height: {val.height}</h2>
                <h2>Weight: {val.weight}</h2>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;

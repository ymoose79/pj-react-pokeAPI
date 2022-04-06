// import { objectExpression } from "@babel/types";
import axios from "axios";
import React, { useState } from "react";
import "./CSS/PokeMon.css";
import Modal from "./PokeModal";

const PokeMon = ({ pokeMon }) => {
  const [pokeArr, setPokeArr] = useState();
  const [open, setOpen] = useState(false);

  // openModal handler f{}-  gets passed to child as prop, accepts param from child
  const openModalState = (data) => {
    setOpen(data);
  };

  const pick = function (obj, arr) {
    const poKeyValuesPairs = arr.reduce(
      (acc, record) => (record in obj && (acc[record] = obj[record]), acc),
      {}
    );
    setPokeArr(poKeyValuesPairs);
    console.log(pokeArr)
  };

  const getPokeData = (url) => {
    axios.get(url).then((res) => {
      pick(res.data, ["abilities", "height", "weight", "sprites"]);
      setOpen(!open);
    });
  };

  return (
    <>
      <div className="cards">
        <section className="pokeCard">
          <button className="btn-poke" onClick={() => getPokeData(pokeMon.url)}>
            {pokeMon.name}
          </button>
        </section>
      </div>
      <div className="pokeCard-modal -hidden">
        {pokeArr ? (
          <Modal open={open} val={pokeArr} openModalState={openModalState} />
        ) : null}
      </div>
    </>
  );
};

export default PokeMon;

// import { objectExpression } from "@babel/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./CSS/PokeMon.css";
import Modal from "./PokeModal";

const PokeMon = ({ pokeMon }) => {
  const [pokeArr, setPokeArr] = useState([]);
  // const [pokeAbilities, setPokeAbilities] = useState([]);
  // const [pokeHeight, setPokeHeight] = useState([]);
  // const [pokeWeight, setPokeWeight] = useState([]);

  const [open, setOpen] = useState(false);



  const pick = function (obj, arr) {
     const poKeyValuesPairs = arr.reduce(
      (acc, record) => (record in obj && (acc[record] = obj[record]), acc),
      {}
    );
    console.log(poKeyValuesPairs);
  };

  const getPokeData = (url) => {
    axios.get(url).then((res) => {
      setPokeArr(res.data);
    });
    setOpen(!open)
  };

  useEffect(() => {
    if (pokeArr) {
      pick(pokeArr, ["abilities", "height", "weight", "sprites"]);
      //   console.log(pokeArr);
    }
  }, [pokeArr]);

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
        <Modal open={open} />
      </div>
    </>
  );
};

export default PokeMon;

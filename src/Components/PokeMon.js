import { objectExpression } from "@babel/types";
import axios from "axios";
import React, { useState } from "react";
import "./CSS/PokeMon.css"

const PokeMon = ({ pokeMon }) => {
  const [pokeArr, setPokeArr] = useState([]);
  const [pokeAbilities, setPokeAbilities] = useState([]);
  const [pokeHeight, setPokeHeight] = useState([]);
  const [pokeWeight, setPokeWeight] = useState([]);

  const pick = function (obj, arr) {
    const pokePick = arr.reduce(
      (acc, record) => (record in obj && (acc[record] = obj[record]), acc),
      {}
    );
    console.log(pokePick);
  };

  const getPokeData = (url) => {
    axios.get(url).then((res) => {
      console.log(res.data);
      setPokeArr(res.data);
      pick(pokeArr, ["abilities", "height", "weight", "sprites"]);
      //   console.log(pokeArr);
    });
  };

  return (
    <div>
      <h3>
        pokeMon:
        <button className="btn-poke" onClick={() => getPokeData(pokeMon.url)}>{pokeMon.name}</button>
      </h3>
    </div>
  );
};

export default PokeMon;

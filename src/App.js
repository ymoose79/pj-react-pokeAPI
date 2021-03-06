import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeMon from "./Components/PokeMon";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [pokeMons, setpokeMons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        setpokeMons(res.data.results);
        console.log(res.data.results[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="titles">gettting started</h1>
        <p>the count is {count}</p>
        <button onClick={() => setCount(count + 1)}>add 1</button>
        <button onClick={() => setCount(count - 1)}>minus 1</button>
        <p>my name is {name}</p>
        <input
          placeholder="enter Name"
          value={name}
          onChange={handleInputChange}
        ></input>
          <h1 className="titles">Accessing PokeAPI</h1> 
      </header>
        <div className="centered">
          <section className="cards">
              {pokeMons.map((pokeMon) => {
                return <PokeMon pokeMon={pokeMon} />;
              })}
          </section>
        </div>
    </div>
  );
}

export default App;

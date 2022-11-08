import React from 'react';
import { useState } from 'react';


const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  function handleInputChange(e) {
    console.log(e.target.value)
    setPokemonNameInput(e.target.value)
  }

  function catchPokemon() {
    setCaught(caught.concat(pokemonNameInput))
  }

  return (
   <div> 
      <p>Caught {caught.length} Pokémon on {props.date}</p>
      <input type="text"
      value={pokemonNameInput}
      onChange={handleInputChange}
      className="input"
      />
      <button onClick={catchPokemon}>Click</button>
      <ul>
        {caught.map((el,ind) => <li key={ind}>{el}</li>)}
      </ul>
    </div>
   
  );
};


export default CaughtPokemon;
import React from 'react';
import { useState } from 'react';


const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);

  function catchPokemon() {
    setCaught(caught.concat(Math.floor(Math.random() * caught.length)))
  }

  return (
   <div> 
      <p>Caught {caught.length} Pokémon on {props.date}</p>
      <button onClick={catchPokemon}>Click</button>
      <ul>
        {caught.map((el,ind) => <li key={ind}>{el}</li>)}
      </ul>
    </div>
   
  );
};


export default CaughtPokemon;
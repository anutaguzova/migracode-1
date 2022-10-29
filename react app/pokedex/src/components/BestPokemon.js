import React from 'react';


const BestPokemon = (props) => {
    
  return (
    <div>
        <p>My favorite Pokémon is Squirtle</p>
        <ul>
          {props.abilities.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
    </div>
    
  );
};


export default BestPokemon;
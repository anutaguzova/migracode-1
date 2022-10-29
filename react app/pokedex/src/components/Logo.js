import React from 'react';


const Logo = (props) => {

  return (
    <header className="App">
      <h1>Welcome to the {props.appName}</h1>
      <img alt="Pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" />
    </header>
  );
};


export default Logo;

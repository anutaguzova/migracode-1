import React from 'react';
import './App.css';
import Logo from './components/Logo';
import BestPokemon from './components/BestPokemon';
import CaughtPokemon from './components/CaughtPokemon';

const App = () => {
  const appName = "Pokedex";
  const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
  const date = new Date().toLocaleDateString();
  function logWhenClicked() {
    console.log("Hello, I am Logo")
  }

  return (
    <div>
       <Logo appName={appName} handleClicked={logWhenClicked} />
       <BestPokemon abilities={abilities}/>
       <CaughtPokemon date={date}/>
    </div>
  );
};


export default App;

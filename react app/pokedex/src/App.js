import React from 'react';
import './App.css';
import Logo from './components/Logo';
import BestPokemon from './components/BestPokemon';
import CaughtPokemon from './components/CaughtPokemon';

const App = () => {
  const appName = "Pokedex";
  const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
  const date = new Date().toLocaleDateString();

  return (
    <div>
       <Logo appName={appName}/>
       <BestPokemon abilities={abilities}/>
       <CaughtPokemon date={date}/>
    </div>
  );
};


export default App;

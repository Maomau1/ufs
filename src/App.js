import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import {Links, Navigate, useNavigate} from 'react-router-dom'
import {projects as data} from './projects';
import NewProject from './pages/NewProject';


function App() {
  console.log("App rendering")
  const navigate = useNavigate();
  function handleClick(e){
    console.log(e.target.value)
    navigate(`${e.target.value}`)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to <code>ufs first database attempt</code> beta version.
        </p>
        <span><button value='/home' onClick={handleClick}>See Projects</button> <button value='newproject' onClick={handleClick}>Add New Project</button></span>
      </header>
      <main>
      </main>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import logo from '../logo.svg';
import '../App.css';
import {useNavigate} from 'react-router-dom'

function WelcomePage() {
    console.log("Welcome Page rendering")
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

export default WelcomePage

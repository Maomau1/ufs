import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Links, Navigate, Outlet, useNavigate} from 'react-router-dom'
import Home from './pages/Projects';


function App() {
  const [projects, setProjects]=useState([])

    useEffect(()=>{
      fetch('http://localhost:3000/projects')
      .then(res=>res.json())
      .then(data=>setProjects(data))
      .catch(error=>console.log(error))
    },[])

  console.log("App rendering",projects)
  const navigate = useNavigate();
  function handleClick(e){
    console.log(e.target.value)
    navigate(`${e.target.value}`)
  }
  function handleNewProject(projectAdded){
    console.log(projectAdded)
   setProjects([...projects,projectAdded])
  }
  return (<>
  <Outlet context={{projects:projects, handleNewProject:handleNewProject}}/>
  </>
  );
}

export default App;

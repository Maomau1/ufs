import React, {useState, useEffect} from 'react'
import ProjectCard from '../components/ProjectCard'
import NewProject from './NewProject'
import NavBar from '../components/NavBar'
//import {projects as data} from '../projects'

function Home() {
    console.log("Home rendering")
    const [projects, setProjects]=useState([])
    useEffect(()=>{
      fetch('http://localhost:3000/projects')
      .then(res=>res.json())
      .then(data=>setProjects(data))
      .catch(error=>console.log(error))
    },[])

    function handleNewProject(projectAdded){
      console.log(projectAdded)
        setProjects([...projects,projectAdded])
    }
    
    console.log(handleNewProject);
    //console.log (projects)
    
    const projectsToDisplay=projects.map(project=>{
      // console.log(project)
      return <article key={project.id}><ProjectCard name={project.name} id={project.id}/></article>})
      return (
        <div>
      <header>
        <NavBar/>
      </header>
      <h2>I am the UFS Engineering Home</h2>
      {projectsToDisplay}
      <NewProject handleNewProject={handleNewProject}/>
    </div>
  )
}
export default Home
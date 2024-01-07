import React from 'react'
import NavBar from '../components/NavBar'

function About() {
    console.log("About rendering")
  return (
    <div>
      <header>
      <NavBar/>
      </header>
      <main>
        <h1>About this page</h1>
      </main>
    </div>
  )
}

export default About
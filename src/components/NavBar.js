import React from 'react'
import {NavLink} from 'react-router-dom'
import './navbar.css'

function NavBar() {
  return (
    <div className='navbar'>
        <NavLink
        exact="true"
        to="/">
            Home
        </NavLink>
        <NavLink
        to="/home">
            Projects
        </NavLink>  
        <NavLink
        to="/newproject">
            New Project
        </NavLink>    
    </div>
  )
}

export default NavBar
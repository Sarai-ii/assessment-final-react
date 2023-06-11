import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/SGlogo.png"
import "./Nav.css"

function Nav() {
  return (
    <nav className='nav'>
      <Link className="navbar-brand logo" to="/">
        <img 
        src={Logo} 
        alt="Studio Ghibli logo" 
        className="logo" 
        // width={"auto"} height={"auto"} The 50x50 looks bad and squished
        />
      </Link>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/people">People</Link>
      <Link to="/locations">Locations</Link>
    </nav>
  )
}

export default Nav

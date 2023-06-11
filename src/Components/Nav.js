import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/SGlogo.png"

function Nav() {
  return (
    <nav className='nav'>
      <Link className="navbar-brand logo" to="/">
        <img src={Logo} alt="Studio Ghibli logo" className="" width={"auto"} height={"auto"}/>
      </Link>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/people">People</Link>
      <Link to="/locations">Locations</Link>
    </nav>
  )
}

export default Nav

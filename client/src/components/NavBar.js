import React from "react"
import { NavLink } from "react-router-dom"
import Search from "./Search"
import Order from "./Order"
import Filters from "./Filters"
import "./NavBar.css"

const NavBar = () => {
    return (
        <div className="nav">

            <NavLink to="/home" name="" order="">
            <button  className="buttonhome">Home</button> 
            </NavLink>
            <Search />
          
            
            <NavLink  to="/home/create">
              <button  className="buttoncreate">Create New Game</button>  
            </NavLink>
            <Order />
            <div    >
            <Filters />
            </div>
        </div>

    )
}

export default NavBar
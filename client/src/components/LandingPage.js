import "./LandingPage.css"
import React from "react";
import {Link } from "react-router-dom";


const LandingPage = () => {
    return (
       <div className="landingdiv">
        <div className="landing-container">
            <h1 className="welcomeText">Videogame App</h1>
            <Link to= "/home">
                <button className="introButton">Enter</button>
            </Link>
        </div>
    </div>
    )
}

export default LandingPage;
import React from 'react';
import { Link } from 'react-router-dom';
import Ingredients from "./Ingredients";

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
            <Link to="/"><img src={ require('../img/pp_logo.png') } className="App-logo left" alt="logo"/></Link>
            
            <Ingredients />

            </div>
        </nav>
    )
}

export default Navbar;
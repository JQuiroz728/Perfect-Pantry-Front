import React from 'react';
import { NavLink } from 'react-router-dom';

const Ingredients = () => {
    return (
        <ul className="right">
            <li><NavLink to="/">Ingredients</NavLink></li>
            <li><NavLink to="/recipe/">Get Recipes</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating blue ligthen-1">JQ</NavLink></li>
        </ul>
    )
}

export default Ingredients;
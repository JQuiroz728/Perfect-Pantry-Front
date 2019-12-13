import React from 'react';

const Form = props => (
    <form onSubmit={props.getRecipe} style={{ marginBottom:"2rem" }}>
        <input className="form__input" style={{ textAlign:"center" }} type="text" name="recipeName" defaultValue="Carrots Olives Salmon Eggs Cheese Olive Oil" placeholder="Enter ingredients: eg., eggs bacon pasta ..."  autoComplete="off"/>
        <button className="form__button">Search</button>
    </form>
);

export default Form;
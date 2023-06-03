import React from "react";
import "../styles/CreateToDoButton.css"

export function CreateToDoButton() {
    return(
        <React.Fragment>
        <button className="addTask-button-mobile">+</button>
        <span className="addItem">
        <h2  className="title-principal-tablet">TASK<br/> PLANNER</h2>
        <input className="addTask-input-tablet"placeholder="Comprar toalla"></input>
        <button className="addTask-button-tablet">Create Task</button>
        <img src="./imagen-tablet.jpg" className="img-tablet"></img>
        </span>
        </React.Fragment>
    )
}
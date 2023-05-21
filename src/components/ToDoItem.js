import React from "react";
import "../styles/ToDoItem.css"


export function ToDoItem(props) {
    return(
        <li className="list-todo-item">
            <span className="list-todo-item--check">✓</span>
            <p>{props.text}</p>
            <span className="list-todo-item--cancel">X</span>
        </li>
    )
}
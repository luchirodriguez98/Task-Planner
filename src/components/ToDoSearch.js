import React from "react";
import "../styles/ToDoSearch.css"

export function ToDoSearch() {
    return(
        <div className="input-search">
        <input placeholder="Search your tasks" />
        <img className="img-search" src="../img/search.png"></img>
        </div>
    )
}
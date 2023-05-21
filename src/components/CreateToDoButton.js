import React from "react";
import "../styles/CreateToDoButton.css"

export function CreateToDoButton() {
    return(
        <React.Fragment>
        <button>+</button>
        <span className="addItem inactive"></span>
        </React.Fragment>
    )
}
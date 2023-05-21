import React from "react";
import "../styles/ToDoList.css"

export function ToDoList(props) {
    return (
        <section className="list-todo">
          <ul>
            {props.children}
          </ul>
        </section>
      );
}
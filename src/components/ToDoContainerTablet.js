import React from "react";
import "../styles/ToDoContainerTablet.css"
import { ToDoList } from "./ToDoList";
import { CreateToDoButton } from "./CreateToDoButton";

export function CreateToDoContainerTablet() {
    return(
        <section className="ToDoContainerTablet">
            <ToDoList />
            <CreateToDoButton />
        </section>
    )};
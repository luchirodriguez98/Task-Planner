import React from "react";
import "../styles/ToDoList.css";
import { ToDoItem } from "./ToDoItem";

const toDos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Tomar medicamento', completed: false},
  {text: 'Lavar ropa', completed: false}, 
  {text: 'Comprar toallas', completed: false}, 
  {text: 'Comprar regalo mama', completed: false},
  
]

export function ToDoList(props) {
    return (
        <section className="list-todo">
          <h3 className="title-secundary-tablet">To Do</h3>
          {toDos.map(toDo=>(
            <ToDoItem key={toDo.text} text={toDo.text} />
          ))}
          <ul>
            {props.children}
          </ul>
        </section>
      );
}
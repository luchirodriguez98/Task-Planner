import React from "react";
import { ToDoCounter } from "./components/ToDoCounter";
import { ToDoSearch } from "./components/ToDoSearch";
import { ToDoList } from "./components/ToDoList";
import { ToDoItem } from "./components/ToDoItem";
import {CreateToDoButton} from "./components/CreateToDoButton";
import { Footer } from "./components/Footer";
// import './App.css';

const toDos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Tomar medicamento', completed: false},
  {text: 'Lavar ropa', completed: false}, 
]

function App() {
  return (
    <React.Fragment>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        {toDos.map(toDo=>(
          <ToDoItem key={toDo.text} text={toDo.text} />
        ))}
      </ToDoList>
      <CreateToDoButton />
      <Footer />
    </React.Fragment>
  );
}

export default App;

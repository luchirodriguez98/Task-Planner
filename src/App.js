import React from "react";
import { ToDoCounter } from "./components/ToDoCounter";
import { ToDoSearch } from "./components/ToDoSearch";
import { CreateToDoContainerTablet } from "./components/ToDoContainerTablet";
import { Footer } from "./components/Footer";
// import './App.css';



function App() {
  return (
    <React.Fragment>
      <ToDoCounter />
      <ToDoSearch />
      <CreateToDoContainerTablet />
      <Footer />
    </React.Fragment>
  );
}

export default App;

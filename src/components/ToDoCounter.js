import React from "react";
//importar achivo de css con los estilos
import '../styles/ToDoCounter.css'

// variable para estilos, no se pueden pasar estilos con guiones(background-color) ni los colores sin comillas
// const style ={
//     color: 'red',
//     backgroundColor: 'pink'
// }

export function ToDoCounter() {
    return(
        // para los estilos en react se pone style ={} y ahi dentro pasamos una variable hecha por fuera con todos los estilos
        // <h2  class="title" style ={style}>Has completado 2 de 3 tareas pendientes</h2>
        //sino se puede escribir asi. En react un par de {} indican que ahi dentro se escribe JS, entonces para poner un obj hay que poner dos pares de llaves {{ACA EL OBJ}}
        // <h2 style ={{color: 'red',backgroundColor: 'pink'}}>Has completad0 2 de 3 tareas pendientes</h2>
        //y otra forma es importando el archivo de css con los estilos(como hacemos normalmente) y agregando una clase al elemento que vamos a modificar
        <h2  className="title-principal">TASK<br/> PLANNER</h2>
        )
}
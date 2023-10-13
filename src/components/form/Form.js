import React from 'react'
import { Link } from 'react-router-dom'

const Form = ({newTask, newTaskHandler,addTaskHandler}) => {

  const onChangenewTask=(event)=>{
    newTaskHandler(event.target.value)
  }

  return (
    <div><h1>Formulario de tareas</h1>
    <form>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={newTask}
        onChange={onChangenewTask}
      />
      <button type="submit" onClick={addTaskHandler}>Agregar</button>
    </form> <br/>
    <Link to="/tareas">
      <button>Ver Tareas</button>
  </Link> 
    </div>
  )
  
}

export default Form

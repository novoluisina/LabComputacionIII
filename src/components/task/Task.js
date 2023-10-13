
import { Link } from "react-router-dom"

import './Task.css'

const Task = ({tasks,markTaskAsCompleted,deleteTask}) => {

  return (
    <div>
      <h1>Lista de tareas</h1>
      {tasks.length === 0 ? (
        <p>No hay tareas disponibles.</p>
      ) : (
        <ul>
        {tasks.map((task, id) => (
          <li
            key={id}
            className={task.completed ? 'completed' : ''}
          >
            {task.text}
            <div>
              <button onClick={() => markTaskAsCompleted(id)}>Tarea completada</button>
              <button onClick={() => deleteTask(id)}>Eliminar</button>
            </div>
            <hr/>
          </li>
        ))}
      </ul>
      )}
      <Link to="/agregar-tareas">
      <button>Agregar tareas</button>
      </Link> 
    </div>
  )
}


export default Task
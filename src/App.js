
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import { useState } from 'react';

import './App.css';

import Task from './components/task/Task';
import Home from './components/home/Home'
import Protected from './components/protected/Protected';
import Login from './components/login/Login';
import Form from './components/form/Form'
// import Table from './components/table/Table';


function App() {
  // const netIncomes = [
  //   {brand: 'McDonalds', income: 1291283}, 
  //   {brand: 'Burger King', income: 1927361}, 
  //   {brand: 'KFC', income: 1098463}];
    
  // const totalIncomes=netIncomes.reduce((total,currentItem)=>total+currentItem.income,0)
  // const average=totalIncomes/netIncomes.length

  const [isLoggedIn, setIsLoggedIn] = useState (false)

  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([]);

  const newTaskId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

  const newTaskHandler = (value) => {
    setNewTask(value)
  }

  const addTaskHandler = (event) => {
    event.preventDefault();
    if (newTask.trim() === '') {
    alert("Ingrese una tarea")
    return;
  }
    const dataTask = {
      id:newTaskId,
      text: newTask,
      completed: false
    };
    
    setTasks([...tasks, dataTask]);
    setNewTask('')
    
  }

  const markTaskAsCompleted = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if ((task.id-1) === taskId) {
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  const deleteTask=(taskId)=>{
    const updatedTasks = tasks.filter((task) => (task.id-1) !== (taskId));
    setTasks(updatedTasks.map((task, index) => ({ ...task, id: index + 1 })))
  }

  const loginHandler =() =>{
      setIsLoggedIn(true);
    }
  
  const router = createBrowserRouter([
    {path:"/",
      element:
      <Home onLogin={loginHandler}/>
    },

    {
      path:"/login",
      element:
      <Login />
    },

    {
      path:"/tareas",
      element:
      <Task tasks={tasks} markTaskAsCompleted={markTaskAsCompleted} deleteTask={deleteTask}/>
    },

   {path: '/agregar-tareas',
     element: (
      <Protected isLoggedIn={isLoggedIn}>
        <Form newTaskHandler={newTaskHandler} newTask={newTask} addTaskHandler={addTaskHandler}/>
      </Protected>
     )   
   }

  ])
  
  return <RouterProvider router={router}/>
    // <div className="App">

    //   {/* <Table netIncomes={netIncomes} average={average}/>
    //   <hr/> */}
  

    // </div>
}

export default App;


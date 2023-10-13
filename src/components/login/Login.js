import React from 'react'
import { useNavigate } from "react-router";

const Login = ({setUsernameHandler,username,setUsername, onLogin}) => {

  const navigate=useNavigate();

  const changeUsernameHandler=(event)=>{
    setUsernameHandler(event.target.value)
    
    if(username.toLowerCase().includes('o')){
      alert('Por favor, ¡Nombres de usuario sin la letra o!')
      setUsername('')
      }
  }
  const registrationHandler=()=>{
    if(username.trim() === '' || username.toLowerCase().includes('o'))
    {
      alert('Usuario inválido para registrarse');
      setUsername('')
      return;
    }
      alert('Usuario registrado correctamente');
      onLogin();
      navigate("/agregar-tareas");
  };

  return (
    <div>
        <div>
          <label>Username </label>
          <input type="text" onChange={changeUsernameHandler} value={username}></input>
        </div><br/>
        <div>
          <button onClick={registrationHandler}>Registrarse</button>
        </div> 
        <div>
          <p>Username ingresado: {username}</p>
        </div>
    </div>

  )
}

export default Login
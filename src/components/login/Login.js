import React from 'react'

const Login = ({setUsernameHandler,username,setUsername}) => {

  const changeUsernameHandler=(event)=>{
    setUsernameHandler(event.target.value)
    
    if(username.toLowerCase().includes('o')){
      alert('Por favor, ¡Nombres de usuario sin la letra o!')
      setUsername('')
      }
  }
  const registrationHandler=()=>{
    (username.trim() === '' || username.toLowerCase().includes('o'))? 
    alert('Usuario inválido para registrarse'):
    alert('¡Usuario registrado correctamente!');
    setUsername('')
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
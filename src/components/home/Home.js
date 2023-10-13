import React from 'react'
import {useState} from 'react'

import Login from '../login/Login'

const Home = ({onLogin}) => {
  const[username, setUsername]=useState('')
  const[showLogin,setShowLogin]=useState(true)

  const setUsernameHandler=(value)=>{
     setUsername(value)
  }
  const changeShowLoginHandler=()=>{
    setShowLogin(!showLogin)
  }
  return (
    <div>
    {showLogin ? (<button type="button" onClick={changeShowLoginHandler}>Iniciar sesión</button>)
    : (<button type="button" onClick={changeShowLoginHandler}>Cerrar sesión</button>)}<br/><br/>
    {!showLogin && <Login setUsernameHandler={setUsernameHandler} username={username} setUsername={setUsername} onLogin={onLogin}/>} 
    </div>
  )
}

export default Home
import {useState} from 'react'
import './App.css';
import Login from './components/login/Login'
import Table from './components/table/Table';


function App() {
  const netIncomes = [
    {brand: 'McDonalds', income: 1291283}, 
    {brand: 'Burger King', income: 1927361}, 
    {brand: 'KFC', income: 1098463}];
    
  const totalIncomes=netIncomes.reduce((total,currentItem)=>total+currentItem.income,0)
  const average=totalIncomes/netIncomes.length

  const[username, setUsername]=useState('')
  const[showLogin,setShowLogin]=useState(true)

  const setUsernameHandler=(value)=>{
     setUsername(value)
  }
  const changeShowLoginHandler=()=>{
    setShowLogin(!showLogin)
  }
  
  return (
    <div className="App">

      <Table netIncomes={netIncomes} average={average}/>
      <hr/>

      <p><b>Ejercicio obligatorio 3</b></p>

      {showLogin ? (<button type="button" onClick={changeShowLoginHandler}>Iniciar sesión</button>)
      : (<button type="button" onClick={changeShowLoginHandler}>Cerrar sesión</button>)}<br/><br/>
      {!showLogin && <Login setUsernameHandler={setUsernameHandler} username={username} setUsername={setUsername}/>}

    </div>
  );
}

export default App;


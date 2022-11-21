import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'

function App() {

  return <LoginPage/>;

}

function LoginPage(){
  const [pleaseLogin, setPleaselogin] = useState('');
  

  const setMessage = () => { 
    setPleaselogin((_) => 'Please loginnnnnnn')
}

  return (

    <div className='container'>

    <LoginTitle please = {pleaseLogin}/>
    <AddUsernamePassword/>


    </div>

  )
}

 


function LoginTitle({please}){
  

  return(
    <>
    <h2>Login-Page</h2>
    <h3>{please}</h3>
    </>
  )
  }



function AddUsernamePassword(){

  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');

  const handleUserChange = (event)=>{
    // console.log(event)
    const usernameValue = event.target.value
    setUsername((_) => usernameValue)
  }

  const handlePasswordChange = (event)=>{
    // console.log(event)
    const usernameValue = event.target.value
    setPassword((_) => usernameValue)
  }

  const handleSubmitButton = () => {
    if(username && password){
      if(username === 'admin' && password === 'admin'){
        alert('Successful Login')
      }
      else{
        alert('Failed Login')
      }
    }
    
  }



  //  useEffect(() => {
  //   LoginPage.setMessage();
  

  // }, [])

  

  return(
    <>
    <div className='user'>

      <input type='text' onChange={handleUserChange} placeholder='Username'></input>
    </div>
  
    <div className='password'>
      <input type='password' onChange={handlePasswordChange} placeholder='Password'></input>
    </div>
    
    <div>
      <button type='submit' onClick={handleSubmitButton}>Login</button>
    </div>

    </>

  )
}



export default App;

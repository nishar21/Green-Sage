import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'

function Login() {
    const [email,setEmail] = useState([])
    const [password,setPassword] = useState([])
  
  console.log('hello');
  let navigate = useNavigate();

  //axios.defaults.withCredentials =true
  const handleSubmit = (event) =>{
      event.preventDefault()
      axios.post("http://localhost:8080/login",{email,password}) 
      .then(res =>// console.log(res.data)
        {
            //console.log(res.data)
          if (res.data === "Success")
          {
            console.log(res.data)
              navigate("/web")
              
          }
          else{
            console.log("String not found")
              navigate("/login")
              alert("wrong")
              console.log(res.data)
              
          } 
      }
      )
      .catch(err => console.log("err value", err)) 
  }
  return (
    <div className='Login'>
        <label className='loginlabel'>Login</label>
        <br></br>
        <label className='logine'>Enter Email :</label>
        <br></br>
        <input className='loginemail' name='email' onChange={(e) => setEmail(e.target.value)} />
        <br></br>
        <label className='loginp'>Enter Password :</label>
        <br></br>
        <input className='loginpassword' name='password' onChange={(e) => setPassword(e.target.value)} />
        <br></br>
        <button className='loginsubmit' type = 'submit' onClick={handleSubmit}>Submit</button>
        <br></br>
        <br></br>
        <button className='logup' ><Link to='/'>Signup</Link></button>

    </div>
  )
}

export default Login
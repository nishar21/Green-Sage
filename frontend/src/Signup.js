import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Signup.css'

function Signup() {
    const [name,setName] = useState([])
    const [email,setEmail] = useState([])
    const [password,setPassword] = useState([])
  
    let navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      navigate("/web");
      axios.post("http://localhost:8080/",{name,email,password})         
      .then(res => console.log("register"))
      .catch(err => console.log(" value in User.js", err, '<<>>'));
    }

  return (
    <div className='Signup'>
        <label className='Signuplabel'>Sign up</label>
        <br></br>
        <label className='signupn'>Enter Name :</label>
        <input className='signupname' name='name' onChange={(e) => setName(e.target.value)} />
        <br></br>
        <label className='signupe'>Enter Email :</label>
        <br></br>
        <input className='signupemail' name='email' onChange={(e) => setEmail(e.target.value)} />
        <br></br>
        <label className='singupp'>Enter Password :</label>
        <br></br>
        <input className='signupassword' name='password' type='password' onChange={(e) => setPassword(e.target.value)} />
        <br></br>
        <button className='signupsubmit' type = 'submit' onClick={handleSubmit}>Submit</button>
        <button className='signupin' ><Link to='/login'>Login</Link></button>
    </div>
  )
}

export default Signup
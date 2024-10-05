import React from 'react'
//import Dashboard from './components/Dashboard'
import { Link } from 'react-router-dom'
import './Web.css'
import Dashboard from './components/Dashboard'

function Web() {
  return (
    <div>
        <div className='total'>
            <div className='menu'>
                <label className='green'>Green Sage</label>
                <br></br>
                <label className='men'><img src='home.png' className='icon'></img>&nbsp;&nbsp;Dashboard&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <label className='men'><img src='inbox.png' className='icon'></img>&nbsp;&nbsp;Inbox&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <label className='men'><img src='chat.png' className='icon'></img>&nbsp;&nbsp;Live Chat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <label className='men'><img src='history.png' className='icon'></img>&nbsp;&nbsp;History&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <label className='men'><img src='account.png' className='icon'></img>&nbsp;&nbsp;Account&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <label className='men'><img src='settings.png' className='icon'></img>&nbsp;&nbsp;Settings&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            </div>
            <div>
                <div>
                <nav class="navbar">
                    <img src='menu.png' className='menu-image'></img> 
                    <ul className='ul'>
                        <li><a href="#">Home</a></li>
                        <br></br>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                </div>
                <div><Dashboard/></div>
            </div>
        </div>
        
    </div>
  )
}

export default Web
import React from 'react'
import {SiDiscord} from 'react-icons/si'
import {BsTwitter} from 'react-icons/bs'
import logo from "../../images/logo.png"
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
    <div className='navbar'>
    <img src={logo} alt="logo" width="150px" className='nav-logo'/>
      <div className='nav-title'>
      <p>Join us</p>
      </div>
      <div className='nav-links'>
      <BsTwitter/>
      </div> 
      <div className='nav-discord'>
      <SiDiscord/>    
      </div>
    </div>
    </nav>
  )
}

export default Navbar
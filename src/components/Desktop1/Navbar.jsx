import React from 'react'
import {SiDiscord} from 'react-icons/si'
import {BsTwitter} from 'react-icons/bs'
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <nav>
    <div className='navbar'>
    <img src={logo} alt="logo" width="150px" className='nav-logo'/>
      <p>Join us</p>
      <BsTwitter/>
      <SiDiscord/>
    </div>
    </nav>
  )
}

export default Navbar
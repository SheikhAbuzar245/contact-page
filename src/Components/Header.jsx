import React from 'react'
import Logo from '../assets/logo.png'

function Header() {
  return (
    <>
          <div className="container">
        <div className="header">
          <img src={Logo} alt="" />

          <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
        
    
    </>
  )
}

export default Header
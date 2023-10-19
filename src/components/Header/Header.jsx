import "./Header.sass";
import React, { useState } from 'react';

const Header = () => {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  const closeMenu = () => setClick(false)

    return(
      <>
      <header>
        <nav className={color ? "nav nav-bg" : "nav"}>
          <div className="logo"><img src="../src/assets/logo-nav.png" alt="logo" /></div>
          <ul id="navbar" onClick={handleClick} className={click ? "#navbar active" :"#navbar"}>
            <li><a className="active" href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#menu" onClick={closeMenu}>Menu</a></li>
            <li><a href="#gallery" onClick={closeMenu}>Gallery</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
          <div id="mobile" onClick={handleClick}>
            <i id="bar" className="material-icons">{click ? "close" : "menu"}</i>
          </div>
        </nav>      
      </header>
      </>
    );

  
}

export default Header
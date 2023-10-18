import "./Header.sass";
import {Component} from 'react';

export default class Header extends Component {
  state = {clicked: false};
  handleClick = () => {
    this.setState({clicked:!this.state.clicked})
  }

  render(){
    return(
      <>
      <header>
        <nav>
          <div className="logo"><img src="../src/assets/logo-nav.png" alt="logo" /></div>
          <ul id="navbar" className={this.state.clicked ? "#navbar active" :"#navbar"}>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#about">About us</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div id="mobile" onClick={this.handleClick}>
            <i id="bar" className="material-icons">{this.state.clicked ? "close" : "menu"}</i>
          </div>
        </nav>      
      </header>
      </>
    );

  }
}
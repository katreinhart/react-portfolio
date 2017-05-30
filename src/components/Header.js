import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="full-width">
          <div className="navbar">
            <div className="half-width">
              <a href="#"><h1>reinhart.digital</h1></a>
            </div>
            <div className="half-width">
              <nav>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#work">Work</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="full-width">
          <div className="hero">
            <h3>welcome to <span id="home-logo">reinhart.digital</span>, <br/>
            a full-service visual design&nbsp;&amp;<br/>
            web development agency <br/>
            based in Seattle, WA.</h3>
          </div>
        </div>
      </header>
    );
  }
}

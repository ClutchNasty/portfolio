import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link,} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'


import picone from './Assets/Images/picone.jpeg'

import BackgroundSlideshow from 'react-background-slideshow'

import Footer from './Components/Footer'
import Stopwatch from "./Pages/StopwatchPage";

// import {
//   Route,
//   NavLink,
//   HashRouter
// } from "react-router-dom";

class Main extends Component {
  
  render() {
      this.state = {

        title: "Devyn Gish",

          headerLinks: [
            { title: "Home", path: '/' },
            { title: "About", path: '/about' },
            { title: "Contact", path: '/contact' }
          ],

          home: {
            title: "Chase your Passion",
            subTitle:"don't give up!",
            text: "checkout my work below!!"
          },

          about: {
            title: "About Me"
          },

          contact: {
            title: "Contact Me"
          },

          stopwatch: {
           title: "Counter"
          },


      }
      
        return (

          <div className="backgroundcode">
            <div className = "nav">
          <Router>
            <Container  classname="p-0" fluid={true}>
              <Navbar className="border-bottom" bg="transparent" expand="lg">
                <Navbar.Brand style={{color: "white"}} >Devyn Gish</Navbar.Brand>

                <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">

                <Nav className="ml-auto">
                  <Link className="nav-link" style={{color: "white"}} to='/'>Home</Link>
                  <Link className="nav-link" style={{color: "white"}} to='/about'>About</Link>
                  <Link className="nav-link" style={{color: "white"}} to='/contact'>Contact</Link>
                  <Link className="nav-link" style={{color: "white"}} to='/stopwatch'>StopWatch</Link>
              

                </Nav>
                </Navbar.Collapse>
              </Navbar>

            {/* Route paths */}

              <Route path="/" 
              exact render={() => <HomePage 
              title={this.state.home.title} 
              subTitle={this.state.home.subTitle}
              text={this.state.home.text}
              />}  

              />
              <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />} />

              <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title}/>} />

              <Route path="/stopwatch" exact render={() => <Stopwatch title={this.state.stopwatch.title}/>} />

              {/* <BackgroundSlideshow images={[ picone, pictwo ]} /> */}
              <Footer  />

            </Container>
          </Router>
          </div>
          </div>
    );
  }
}

export default Main;
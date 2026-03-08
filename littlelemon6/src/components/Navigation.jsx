import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

import Homepage from './layout/Homepage.jsx';
import AboutUsMod from './layout/AboutUsMod.jsx';
import Reservation from './layout/Reservation.jsx';


import LemonLogo from '../assets/images/LemonLogo.png'; // 1. Import the image file



/*
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'react-bootstrap';
*/


// 1. Create simple components for the different pages
const Home = () => <Homepage/>;
const About = () => <AboutUsMod/>;
const ReservationMod = () => <Reservation/>;
const HomeOrder = () => <h2>Home Order</h2>;
const Login = () => <h2>Login</h2>;

/*
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
*/


const Navigation = () => {
  return (
    <>
    {/*}
    <div class="container">
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img  src={LemonLogo} width="250" alt="Little Lemon Logo"/>
        </a>
      </nav>
    </div>
      */}

      <Router>
        <div class="container-auto">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#"><img  src={LemonLogo} width="250" alt="Little Lemon Logo"/></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link class="nav-link" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">About Us</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/reservation">Reservation</Link>
              </li>
              <li class="nav-item">
                 <Link to="/login"><button type="button" class="btn btn-warning">Login</button></Link>
              </li>
            </ul>       
          </div>
           <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link to="/login">
                  <button type="button" class="btn btn-warning">Login</button>
                </Link>
              </li>
            </ul>
          </div>         
        </nav>
        </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/reservation" element={<ReservationMod />} />
            <Route path="/homeorder" element={<HomeOrder />} />
            <Route path="/login" element={<Login />} />
          </Routes>      
      </Router>

{/*}
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
                <Link to="/reservation">Reservation</Link>
            </li>
            <li>
                <Link to="/homeorder">Home Order</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>                         
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservation" element={<ReservationMod />} />
          <Route path="/homeorder" element={<HomeOrder />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
    */}
    </>
  );
};

export default Navigation;

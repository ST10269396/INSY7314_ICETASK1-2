import React from 'react';
import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';

// We import bootstrap to make our application look better.
// We import NavLink to utilize the react router.
// Here, we display our Navbar
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="logo" style={{ width: 25 + '%' }} />
        </NavLink>
        <div className="navbar" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <NavLink className="nav-link" to="/">List</NavLink>
            <NavLink className="nav-link" to="/create">Create Post</NavLink>
            <NavLink className="nav-link" to="/register">Register</NavLink>
            <NavLink className="nav-link" to="/login">Login</NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
}



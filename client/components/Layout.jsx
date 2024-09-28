/* 
 * File name: Layout.jsx
 * Student's Name: Ian Haworth
 * StudentID: 301487971
 * Date: September 27th, 2024
 */


import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/images/logo.png';

export default function Layout() {
  return (
    <>
    {/* Top logo and navigation bar */}
      <header style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Logo" style={{ height: '100px', marginRight: '10px' }} />
        <h1>My Portfolio</h1>
      </header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |
        <Link to="/services">Services</Link> | <Link to="/project">Project</Link> | <Link to="/contact">Contact</Link>
      </nav>
      <br />
      <hr />
    </>
  );
}
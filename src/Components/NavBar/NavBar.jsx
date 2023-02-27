import React, {useRef} from 'react';
import { FaTimes, FaBars} from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {

  const navRef = useRef();

  const showNavBar = () =>{
    navRef.current.classList.toggle('responsive_nav');
  }

  return (
      <header className='nav-container'>
        <h3><NavLink activeClassName='active' className='title-home' exact to='/'>Burn Fitness</NavLink></h3>
          <nav ref={navRef}>
            <NavLink activeClassName='active' exact to='/clases'>clases</NavLink>
            <NavLink activeClassName='active' exact to='/planes'>planes</NavLink>
            <NavLink activeClassName='active' exact to='/contacto'>contacto</NavLink>
            <NavLink activeClassName='active' exact to='/ubicacion'>ubicacion</NavLink>
            <button className='nav-btn nav-close-btn' onClick={showNavBar}>
              <FaTimes />
            </button>
          </nav>
          <button className='nav-btn nav-close-btn' onClick={showNavBar}>
            <FaBars />
          </button>
            <button className='nav-btn-log-in'>Log In</button>    
      </header>
  );
}

export default NavBar;
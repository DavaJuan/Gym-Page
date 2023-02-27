import React from 'react';
import Logo from './img/font-backgroung.png';
import './Home.css';
import ScrollComponent from '../ScrollComponent/ScrollComponent';
import Clases from '../Clases/Clases';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div>
      <div className='home-container'>
        <img src={Logo} alt="not found" />
        <button><Link className='btn-link' to='/contacto'>Contacto</Link></button>
      </div>
      <div>
        <ScrollComponent />
      </div>
      <div>
        <Clases />
      </div>
    </div>
  );
}

export default Home;
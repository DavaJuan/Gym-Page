import React from 'react';
import Wpp from './Vectores/whatsapp-svgrepo-com (1).svg';
import Insta from './Vectores/instagram-svgrepo-com.svg';
import Facebook from './Vectores/facebook-svgrepo-com (1).svg';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-sub-cont'>
        <div className='logo-cont'>
          <h3>Burn Fitness</h3>
        </div>
        <div className='phone-cont'>
          <p>teléfono</p>
          <h4>0000 000 0000</h4>
        </div>
        <div className='email-cont'>
          <p>correo</p>
          <h4>info@gymnombre.com.ar</h4>
        </div>
        <div className='redes-cont'>
          <p>nuestras redes</p>
          <img src={Insta} alt="" width='50px'/>
          <img src={Wpp} alt="" width='50px'/>
          <img src={Facebook} alt="" width='50px'/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
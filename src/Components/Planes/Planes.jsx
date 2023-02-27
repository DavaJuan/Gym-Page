import React from 'react';
import Imagen from './images/font-backgroung.png';
import './Planes.css';
import Cards from './SubComponents/Cards';
import Footer from '../Footer/Footer';

const Planes = () => {
  return (
    <div>
      <div className='container-planes'>
        <img src={Imagen} alt="not found" />
      </div>
      <div className='container-text'>
        <h3>elegí tu plan y</h3>
        <h4>empeza a entrenar</h4>
        <p>Con tu suscripción online a través de <br/> Mercado Pago, <span>AHORRÁS MÁS DE $2000</span> de <br/> la matrícula.</p>
        <p className='text-last'>¡Adquirí tu plan ahora!</p>
      </div>
      {/* <Cards />  */}
    </div>
  );
}

export default Planes;
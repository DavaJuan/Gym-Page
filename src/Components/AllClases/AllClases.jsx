import React from 'react';
import Somos from '../Home/img/font-backgroung.png';
import { Link } from 'react-router-dom';
import './AllClases.css';

const AllClases = () => {
  return (
    <div className='allClases-container'>
      <div className='allclases-grid'>
        <div className='allclases-names'>
          <h3><Link className='name-class' to='/musculacion'>MUSCULACIÓN</Link></h3>
          <h3 ><Link className='name-class'>CROSSFIT</Link></h3>
          <h3><Link className='name-class'>NATACIÓN</Link></h3>
          <h3><Link className='name-class'>SALA CARDIO</Link></h3>
          <h3><Link className='name-class'>YOGA</Link></h3>
        </div>
        <div className='allClases-container2'>
          <img src={Somos} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AllClases;
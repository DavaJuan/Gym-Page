import React from 'react';
import './Card.css';

const Cards = () => {
  return (
    <div className='planes'>
      <div  className='cards-planes'>
        <div className="card">
          <p className='card-title'>Natación | Zona Oeste</p>
          <h3>$7.650</h3>
          <p className='card-info'>
            Clases de natación con <br/> profesor 2 veces por semana
          </p>
          <p className='card-info2'>Sauna e hidromasaje</p>
          <button className='btn-planes'>Comprar</button>
        </div>


        <div className="card2">
        <p className='card-title'>Plan Platinum | Zona Oeste</p>
          <h3>$8.900</h3>
          <p className='card-info'>
            Musculacion + Clases de fitness
          </p>
          <p className='card-info2'>Actividades outdoor</p>
          <p className='card-info2'>Nutricionista</p>
          <p className='card-info2'>Nado libre</p>
          <p className='card-info2'>Sauna e hidromasaje</p>
          <button className='btn-planes'>Comprar</button>
        </div>


        <div className="card2">
        <p className='card-title'>Plan Platinum | Rosedel</p>
          <h3>$9.600</h3>
          <p className='card-info'>
            Musculacion + Clases de fitness
          </p>
          <p className='card-info2'>Actividades outdoor</p>
          <p className='card-info2'>Nutricionista</p>
          <p className='card-info2'>SPA, sauna, hidromasaje, sala de relax, aguas frutales</p>
          <button className='btn-planes'>Comprar</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
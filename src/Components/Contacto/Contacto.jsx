import React from 'react';
import Footer from '../Footer/Footer';
import './Contacto.css';

const Contacto = () => {
  return (
    <div className='form-container'>
      <h2 className='form-tittle'>Contactanos</h2>

      <div className='form-form-container'>
        <div className='form-contact'>
          <form>
            <p>
              <label>Nombre</label>
              <input type="text" />
            </p>
            <p>
              <label>Email</label>
              <input type="email" />
            </p>
            <p>
              <label>Telefono</label>
              <input type="text" name='phone'/>
            </p>
            <p>
              <label>Asunto</label>
              <input type="text" name="affair" />
            </p>
            <p className='block'>
              <label>Mensage</label>
              <textarea name="message" rows="3"></textarea>
            </p>
            <p className='block'>
              <button type='submite'>
                Enviar
              </button>
            </p>
          </form>
        </div>

        <div className='form-info'>
          <h4>Más Información</h4>
          <p>Buenos Aires Argentina.</p>
          <p>Envianos tus dudas acerca de nuetras clases personalizadas / Cross Fit / Musculación / Natación / Yoga / Etc.</p>
          <p>info@gymnombre.com.ar</p>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
import React from 'react';
import '../css/Opiniones.css'

function Opiniones(props) {
  return (
    <div className='contenedor-opiniones'>
      <img 
        className='imagen-opiniones'
        src={require(`../imagenes/${props.imagen}.jpg`)}
        alt='Imagen' />
      <div className='contenedor-texto-opiniones'>
        <p className='texto-opiniones'>"{props.comentario}"</p>
        <p className='nombre-opiniones'>
          <strong>{props.nombre}</strong> de {props.pais}
        </p>
      </div>
    </div>
  );
}

export default Opiniones;

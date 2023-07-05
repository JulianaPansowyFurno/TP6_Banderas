import React from 'react';
import '../index.css';

const Form = ({ respuestaInput }) => {

  const manejoSubmit = (e) => {
    e.preventDefault();
    const formulario = new FormData(e.target)
    const contenido=formulario.get('nombre')
    respuestaInput(contenido);
  }
  
  return (
    <div>
      <div className="one-half column" id='formSize'>
          <form onSubmit={manejoSubmit}>
            <center>
            <input type="text" name="nombre" className="u-full-width" placeholder="Nombre del pais"/>
            <br></br>
            <button  type="submit" className='botonLindo'> <b>Adivinar</b> </button>
            </center>
          </form>
      </div>
    </div>
  );
}


export default Form;

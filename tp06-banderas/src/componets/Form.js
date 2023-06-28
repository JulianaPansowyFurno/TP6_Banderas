import React from 'react';
import '../index.css';

const Form = ({ onAgregarTarjeta, contenido }) => {

  const manejoSubmit = (e) => {
    e.preventDefault();
    const formulario = new FormData(e.target)
    const contenido={
      Nombre: formulario.get('nombre')
    }
    onAgregarTarjeta(contenido);
  
  }
  
  return (
    <div>
      <div className="one-half column" id='formSize'>
          <form onSubmit={manejoSubmit}>
            <label>Adivina el nombre del pais</label>
              <input type="text" name="nombre" className="u-full-width" placeholder="Nombre del pais"/>
                <button type="submit" className="u-full-width button-primary">Adivinar</button>
              </form>
        </div>
    </div>

  );
}

export default Form;

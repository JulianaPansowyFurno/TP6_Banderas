
import './App.css';
import { useState, useEffect } from 'react'; 
import Form from './componets/Form.js';

export default function App(color) {
  const [isLoading, setIsLoading] = useState(true);
  const [Paises, setPaises] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const[InputUsuario, setInput] = useState('');
  var[puntos, setPuntos] = useState(1);

  const selectRandomCountry = (Paises) => {
    const randomIndex = Math.floor(Math.random() * Paises.length);
    setSelectedCountry(Paises[randomIndex]);
  };

  
  useEffect(() => {
    fetch('https://countriesnow.space/api/v0.1/countries/flag/images')
      .then((response) => response.json())  
      .then((objeto) => { 
        setPaises(objeto.data);
        setIsLoading(false);
        selectRandomCountry(objeto.data)
      }); 
      
  }, []);
      
    if(isLoading){
      return (
        <div className="App">
          <h1>Cargando...</h1>
        </div>
      );
    }
    
    console.log("correcto " + selectedCountry.name)

    const GuardarRespuestaDelUsuario = (contenido) => {
      setInput(contenido)
      
      if(contenido == selectedCountry.name)
       {
         setPuntos(puntos + 10)
         
       }
       else
       {
        setPuntos(puntos - 1)
        // <Alert severity="error">No adivinaste, intentalo devuelta</Alert>
         console.log("No es correcto")

       }
       console.log("es correcto y los puntos son: " + puntos)
       selectRandomCountry(Paises)
    }

    const tarjetaStyle = {
      backgroundColor: color,
    };
    

    return (
      <div  className="tarjeta" style={tarjetaStyle}>
        <img src={selectedCountry.flag}/>
        <Form respuestaInput={GuardarRespuestaDelUsuario}/>
        <h2>Puntos ganados: {puntos}</h2>
      </div>
      
  );
}


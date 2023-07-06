
import './App.css';
import { useState, useEffect } from 'react'; 
import Form from './componets/Form.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App(color) {
  const [isLoading, setIsLoading] = useState(true);
  const [Paises, setPaises] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const[InputUsuario, setInput] = useState('');
  var[puntos, setPuntos] = useState(0);

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
      if(contenido == selectedCountry.name)
       {
         setPuntos(puntos + 10)
       }
       else
       {
        setPuntos(puntos - 1)
        toast.error('No adivinaste, inténtalo de nuevo');
       }       
       selectRandomCountry(Paises)
    }

    const tarjetaStyle = {
      backgroundColor: color,
    };
    

    return (
      
      
      <div className='container'>
         <ToastContainer />
        <br></br>
        <br></br>
        <div  className="tarjeta" style={tarjetaStyle}>
        <center>
          <h1> <b>Adivina el nombre del pais</b></h1>
          <br></br>
          <h2><b> Puntos: {puntos}</b></h2>
          <img src={selectedCountry.flag}/> 
          <Form respuestaInput={GuardarRespuestaDelUsuario}/>
          </center>
        </div>
      </div>
      
  );
}
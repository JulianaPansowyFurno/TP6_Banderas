import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'; 


export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [Imagenbandera, setImgBandera] = useState('');

  
  useEffect(() => {
    fetch(' https://countriesnow.space/api/v0.1/countries/flag/images')
      .then((response) => response.json())  
      .then((objeto) => { 
        console.log(objeto.data)
        //setImgBandera(data.); 
        //setIsLoading(false); 
        
      }); 
      }, []);
      
    if(isLoading){ // si está cargando, mostramos el indicador de carga
      return (
        <div className="App">
          <h1>Cargando...</h1>
        </div>
      );
    }
  
     return (
       <div className="App">
         <img src={Imagenbandera} alt="Una bandera" />
       </div>
   );
}

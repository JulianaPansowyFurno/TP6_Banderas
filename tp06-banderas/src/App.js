import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'; 


export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [Imagenbandera, setImgBandera] = useState('');

  const [Paises, setPaises] = useState([]);
  
  useEffect(() => {
    fetch('https://countriesnow.space/api/v0.1/countries/flag/images')
      .then((response) => response.json())  
      .then((objeto) => { 
        setPaises(objeto.data);
        setIsLoading(false);
      }); 
      }, []);
      
    if(isLoading){
      return (
        <div className="App">
          <h1>Cargando...</h1>
        </div>
      );
    }
    function getRandomInt(max) {
      let rand = Math.random() * max;
      rand = Math.floor(rand);
      console.log(rand);
      return rand;
      
    }
    
    let pais = Paises[getRandomInt(Paises.length)];
    setImgBandera(pais.flag)
    console.log(pais);


    return (
      <div>
          {Paises.map((unpais) => 
              (
                  name={unpais.name}
                  flag={unpais.flag}
              )
        {/* <img src={Imagenbandera} alt="Una bandera" /> */}
       </div>
   );
}
//setImgBandera(data.flag);

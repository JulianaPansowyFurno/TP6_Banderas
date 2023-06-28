import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'; 
import Form from './componets/Form.js';


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

      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

      var pais = Paises[getRandomInt(Paises.length)]
      console.log('aaa' + Paises)
      // setImgBandera(pais.flag)
      }, []);
      
    if(isLoading){
      return (
        <div className="App">
          <h1>Cargando...</h1>
        </div>
      );
    }
    
   
    


    return (
      <div>
        {/* {Paises.map((Paises) => 
          (
            <Form
              key = {Paises.id}
              contenido={Paises[getRandomInt(Paises.length)]}                        
            />
          )
        )} */}
        <img src={Imagenbandera}/>
        
      </div>
   );
}


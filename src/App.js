import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import { Image, Box } from '@chakra-ui/react'
import Boton from './componentes/Boton';
import StatsCard from './componentes/Contador';
import { useState } from 'react';


function App() {

  const [numClics, setNumClics] =useState(0);

  const manejarClic = () => {
    setNumClics(numClics+1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };
  return (
    <div className="App">
      <Box height='100px'
        display='flex'
        alignItems='center' >
        <Image
          src={freeCodeCampLogo}
          height='50px'
          display='flex'
          alignContent='center'
          alignItems='center'
          alt='Dan Abramov' />
      </Box>
      <div className='contenedor-principal'>
        <StatsCard numClics={numClics}
        />
        <Boton
          color='green'
          texto={'Clic'}
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton
          color='red'
          texto={'Reiniciar'}
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;

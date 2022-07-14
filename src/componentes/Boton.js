import React from "react";
import { Button } from '@chakra-ui/react'

function Boton({ texto, esBotonDeClic, manejarClic ,color}) {
    return (
        
            <Button
                className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
                onClick={manejarClic}
                colorScheme={color}
                margin='8px'>{texto}</Button>
        
    );
}

export default Boton;
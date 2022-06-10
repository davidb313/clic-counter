import React from 'react';
import '../Hojas-De-Estilo/boton.css';

const Boton = ({ texto, esBotonDeClic, handleClic }) => {
  return (
    <button
      className={esBotonDeClic ? 'boton-clic' : 'boton-reset'}
      onClick={handleClic}
    >
      {texto}
    </button>
  );
};

export default Boton;

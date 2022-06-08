import React from 'react';

const Boton = ({ texto, esBotonDeClic, handleClic }) => {
  return (
    <>
      <div className={esBotonDeClic ? 'boton-clic' : 'boton-reset'}>
        <button onClick={handleClic}>{texto}</button>
      </div>
    </>
  );
};

export default Boton;

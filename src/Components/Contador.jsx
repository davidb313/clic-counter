import React from 'react';
import '../Hojas-De-Estilo/contador.css';

const Contador = ({ numClics }) => {
  return <div className='contador'>{numClics}</div>;
};

export default Contador;

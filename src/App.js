import './App.css';
import freeCodeCampLogo from './images/freeCodeCampLogo.png';
import Boton from './Components/Boton';
import { useState } from 'react';
import Contador from './Components/Contador';

function App() {
  const [numClics, setNumClics] = useState(0);

  const handleSuma = () => {
    setNumClics(numClics + 1);
  };

  const handleResta = () => {
    setNumClics(numClics - 1);
  };

  const resetCounter = () => {
    setNumClics(0);
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-container'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='logo de freecodecamp'
        />
      </div>

      <div className='counter-main-container'>
        <Contador numClics={numClics} />
        <Boton texto='sumar' esBotonDeClic={true} handleClic={handleSuma} />
        <Boton texto='restar' esBotonDeClic={true} handleClic={handleResta} />

        <Boton texto='Reset' esBotonDeClic={false} handleClic={resetCounter} />
      </div>
    </div>
  );
}

export default App;

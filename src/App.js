import './App.css';
import freeCodeCampLogo from './images/freeCodeCampLogo.png';
import Boton from './Components/Boton';
import { useState } from 'react';

function App() {
  const [counter, setcounter] = useState(0);

  const handleClic = () => {
    console.log('Hiciste clic');
  };

  const resetCounter = () => {
    console.log('Reiniciaste clic');
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
        <Boton texto='Clic' esBotonDeClic={true} handleClic={handleClic} />
        <Boton texto='Reset' esBotonDeClic={false} handleClic={resetCounter} />
      </div>
    </div>
  );
}

export default App;

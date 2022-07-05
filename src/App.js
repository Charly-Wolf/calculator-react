import './App.css';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import  freeCodeCampLogo from './images/freecodecamp-logo.png';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const[inputState, setInputState] = useState('');

  const agregarInput = val => {
    setInputState(inputState + val); // Concatenar
  };

  const calcularResultado = () => {
    if (inputState) {
      setInputState(evaluate(inputState)); // evaluate() calcula lo que figure como String en la pantalla de la calculadora, es una funcion del paquete mathjs
    } else {
      alert('Por favor ingrese valores para realizar los cálculos.')
    }
    
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla inputProp={inputState} />
        <div className='fila'>
          <Boton manejarClick={agregarInput} >1</Boton>
          <Boton manejarClick={agregarInput} >2</Boton>
          <Boton manejarClick={agregarInput} >3</Boton>
          <Boton manejarClick={agregarInput} >+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClick={agregarInput}>7</Boton>
        <Boton manejarClick={agregarInput}>8</Boton>
        <Boton manejarClick={agregarInput}>9</Boton>
        <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInputState('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;

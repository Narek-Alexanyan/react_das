import React from 'react';
import './App.css';
import CarImage from './components/CarImage';
import CarInfo from './components/CarInfo';
import urus from "./images/urus.jpg";
import aventador from "./images/aventador.jpg";

function App() {
  return (
    <div className="app">
      <CarImage image={urus} />
      <CarInfo name="lamborghini" modelName="Urus"/>
      <CarImage image={aventador} />
      <CarInfo name="lamborghini" modelName="Aventador"/>
    </div>

  );
}

export default App;

import React from 'react';
import './App.css';
import Product from "./components/Product";
import banana from "./images/banana.jpg";


function App() {
  return (
    <div className="app">
      <img className="app__img" src={banana} alt=""/>
      <Product price="1$" name="Banana" description="Fresh bananas from Ecuador"/>
    </div>

  );
}

export default App;

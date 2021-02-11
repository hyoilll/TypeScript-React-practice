import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings'

function App() {
  const onClick = (name:string) => {
    console.log(`${name} say hello`);
  }
  return (
    <div className="App">
      <Greetings name="Hello" onClick={onClick}></Greetings>
    </div>
  );
}

export default App;

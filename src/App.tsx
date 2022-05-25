import React from 'react';
import logo from './logo.svg';
import './App.css';
import Paragraph from './components/Paragraph';
import Counter from './components/Counter';

function App() {

  return (
    <div className="App">
      <Paragraph text={"sample"} />
      <Counter name='counter1' />
      <Counter name='counter2' initNumber={10} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

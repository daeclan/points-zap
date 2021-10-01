import React, { useState } from "react"
import ReactDOM from "react-dom"
import logo from './logo.svg';
import './App.css';

function Foo() {
  const [count, setCount] = useState(0)
  return <div style={{ opacity: 1 }} />
}

ReactDOM.render(<Foo />, document.getElementById("root"))

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

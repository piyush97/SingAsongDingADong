import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// function App() {
//   const [todos, setTodos] = useState([
//     { text: "Learn about React" },
//     { text: "Meet friend for lunch" },
//     { text: "Build really cool todo app" }
//   ]);

//   // we'll render our todos here ...
//   // return <div></div>
// }

class App extends Component {
  render() {
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
}

export default App;

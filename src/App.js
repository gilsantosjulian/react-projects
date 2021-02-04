import logo from './logo.svg';
import './App.css';
import Toggle from './ToggleRenderProps';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Toggle
          render={({ on, toggle }) => {
            return (
              <div>
                { on && <h1>Show me</h1>}
                <button onClick={toggle}>Show / Hide</button>
              </div>
            )
          }}
        />
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

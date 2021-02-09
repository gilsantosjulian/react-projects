import logo from './logo.svg';
import './App.css';
import Toggle from './ToggleRenderProps';
import ToggleRPC from './ToggleRPC';
import MouseTracker from './MouseTracker';
import Portal from './Portal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MouseTracker />
        <Toggle
          render={({ on, toggle }) => {
            return (
              <div>
                { on && <h1>Show me Render React Props</h1>}
                <button onClick={toggle}>Show / Hide</button>
              </div>
            )
          }}
        />

        <ToggleRPC>
          {
            ({ on, toggle }) => (
              <div>
                { on && <h1>Show me RPC</h1>}
                <button onClick={toggle}>Show / Hide RPC</button>
              </div>
            )
          }
        </ToggleRPC>
        {/* Example of Fragment */}
        <ToggleRPC>
          {
            ({ on, toggle }) => (
              <>
                { on && <h1>Show me RPC</h1>}
                <button onClick={toggle}>Show / Using Fragment</button>
              </>
            )
          }
        </ToggleRPC>
        <Portal>
          <h1>Hi I'm a Portal</h1>
        </Portal>

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

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Header
        </p>
      </header>

      <main className="App-main">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Main block
        </p>
      </main>

      <footer className="App-footer">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Footer
        </p>
      </footer>
    </div>
  );
}

export default App;

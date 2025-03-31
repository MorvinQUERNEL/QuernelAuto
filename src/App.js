import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Presentation from './components/Presentation';
import Etapes from './components/Etapes';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
        <Presentation></Presentation>
      </header>
      <main>
        <Etapes></Etapes>
      </main>
    </div>
  );
}

export default App;

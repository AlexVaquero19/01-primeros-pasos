import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import SegundoComponente from "./SegundoComponente";
import TercerComponente from './TercerComponente';
import EventosComponente from './EventosComponente';

function App() {

  const fichaMedica = {
      altura: "1.70",
      grupo: "A",
      estado: "Bueno",
      alergias: "Ninguna"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <EventosComponente />

        <TercerComponente 
          nombre = "Victor"
          apellidos = "Gonzalez"
          ficha = {fichaMedica}
        />

        <SegundoComponente />
        <MiComponente />

      </header>
    </div>
  );
}

export default App;

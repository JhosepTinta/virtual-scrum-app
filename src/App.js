
import './App.css';
import MyCardA from './Components/MyCardA';

function App() {
  return (
    <div className="App">
        <MyCardA 
        titulo="Manifiesto agil2"
        numero="1"
        if={false}
        />
        <h1>hola</h1>
        <MyCardA
        titulo="Origen y Pilares Fundamentales"
        numero="2"
        if={true}
        />
        <h1>hola</h1>
        <MyCardA
        titulo="Roles de Scrum"
        numero="3"
        if={true}
        />
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';
import Menu from "./components/Menu"; 
import data from "./data/recipes.json";  

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu recipes={data} />
      </header>
    </div>
  );
}

export default App;

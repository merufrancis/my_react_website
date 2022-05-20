import BrowserRouter from 'react-dom'
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Premium from './components/Premium';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <Premium />
    </div>
  );
}

export default App;

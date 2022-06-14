import BrowserRouter from 'react-dom'
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Premium from './components/Premium';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <Premium />
     <Search />
    </div>

  );
}

export default App;

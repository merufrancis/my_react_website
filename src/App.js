import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Series from './components/Series';
import Member from './components/Member';
import About from './components/About';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      <Routes>
      <Route exact path='/' element={< Hero />}></Route>
      <Route exact path='/about' element={< About />}></Route>
      <Route exact path='/movies' element={< Series />}></Route>
      <Route exact path='/member' element={< Member />}></Route>
      </Routes>
     </BrowserRouter>
     <Footer />
    </div>

  );
}

export default App;

import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import Avis from './Pages/Avis';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/movies" element={<Movies/>} />
      <Route path="/avis" element={<Avis/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;

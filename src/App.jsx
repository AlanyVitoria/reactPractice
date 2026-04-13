import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <nav className='nav-bar'>
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/portfolio">Portfólio</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
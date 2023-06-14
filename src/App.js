import {
  Routes, Route, Link,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <>
      <nav className="Navigation">
        <h1 className="Logo">Math Magicians</h1>
        <ul>
          <li>
            <Link className="Link" to="/">Home</Link>
          </li>
          |
          <li>
            <Link className="Link" to="/calculator">Calculator</Link>
          </li>
          |
          <li>
            <Link className="Link" to="/quote">Quote</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quotes />} />
      </Routes>
    </>
  );
}

export default App;

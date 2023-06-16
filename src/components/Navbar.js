import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
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
  );
}

export default Navbar;

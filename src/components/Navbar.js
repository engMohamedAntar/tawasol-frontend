import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-bar">
      <h1>
        <Link to="/" className="logo">Tawasol</Link>
      </h1>
      <ul>
        <li>
          <Link to="/login" className="login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

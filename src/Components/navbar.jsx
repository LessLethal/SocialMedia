import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-menu">
          <i className="material-icons">home</i>
          <Link to="/">Home</Link>
          <i className="material-icons">group</i>

          <Link to="/friends">Friends</Link>
          <i className="material-icons">login</i>

          <Link to="/login">LogIn</Link>
          <i className="material-icons">explore</i>

          <Link to="/explore">Explore</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

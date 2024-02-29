import { Link } from "react-router-dom";
import "./header.css";
function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__content">
            <Link className="logo" to="/">
              <h1 className="logo">NOTES</h1>
            </Link>
            <nav className="header__nav">
              <Link to="/" className="header__nav__link">
                Notelist
              </Link>
              <Link to="/addNotepage" className="header__nav__link">
                addNotepage
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

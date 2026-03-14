import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState } from "react";

function Navbar() {

  const [spin, setSpin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function handleClick() {
    setSpin(true);

    setTimeout(() => {
      setSpin(false);
    }, 600);
  }

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className={styles.navbar}>

      <Link
        to="/"
        className={`${styles.logo} ${spin ? styles.rotate : ""}`}
        onClick={handleClick}
      >
        PhoenixCores
      </Link>

      {/* Hamburger icon */}
      <div className={styles.menuIcon} onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li className={styles.hasDropdown}>
          About
          <ul className={styles.dropdown}>
            <li>
              <Link to="/About">About me</Link>
            </li>
            <li>
              <Link to="/Resume">Download Resume</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/Articles">Articles</Link>
        </li>

        <li>
          <Link to="/Contact">Contacts</Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;
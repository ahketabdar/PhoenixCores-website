import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState } from "react";

function Navbar() {

  const [spin, setSpin] = useState(false);

  function handleClick() {
    setSpin(true);

    setTimeout(() => {
      setSpin(false);
    }, 600);
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

      <ul className={styles.menu}>
        <li><Link to="/">Home</Link></li>

        <li>
          About
          <ul className={styles.dropdown}>
            <li><Link to="/About">About me</Link></li>
            <li><Link to="/Resume">Download Resume</Link></li>
          </ul>
        </li>

        <li><Link to="/Articles">Articles</Link></li>
        <li><Link to="/Contact">Contacts</Link></li>
      </ul>

    </nav>
  );
}

export default Navbar;

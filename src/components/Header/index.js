import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

function Header() {
  const path =
    window.location.pathname !== "/"
      ? window.location.pathname.substring(1) + " page"
      : "Welcome";

  return (
    <>
      <header>
        <div>
          <nav className={styles.navbar}>
            <div className={styles.appName}>MCGA - Parcial 2</div>
            <div className={styles.pageName}>{path}</div>
            <ul className={styles.routes}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <a href="https://github.com/Larrowo/MCGA-Segundo-Parcial">
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;

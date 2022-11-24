import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.names}>
        <p>MCGA - Parcial 2</p>
        <p>Paladini Franco - Astudillo Julián</p>
      </div>
    </footer>
  );
}

export default Footer;

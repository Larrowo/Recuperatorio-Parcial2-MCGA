import React from "react";
import Footer from "../Footer/index.js";
import Header from "../Header/index.js";
import styles from "./layout.module.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Users from "../../Screens/Users";
import Home from "../Home/index.js";

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Users" element={<Users />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Layout;

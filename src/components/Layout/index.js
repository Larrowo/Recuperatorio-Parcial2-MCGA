import React from "react";
import Footer from "../Footer/index.js";
import Header from "../Header/index.js";
import styles from "./layout.module.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Products from "../../screens/products/index.js";
import Test from "../../screens/test/index";
import Home from "../Home/index.js";

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Test />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Layout;

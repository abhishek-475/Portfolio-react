import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

import Works from "./pages/Works";
import Footer from "./components/Footer";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import About from "./pages/About";

// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Works />
      <Skills />

      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

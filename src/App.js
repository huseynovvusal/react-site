import "../src/css/main.css";
import React, { Component } from "react";
import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home";
import About from "../src/components/About";
import Portfolio from "../src/components/Portfolio";
import Footer from "../src/components/Footer";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

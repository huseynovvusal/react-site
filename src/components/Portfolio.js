import React, { Component } from "react";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";

export default class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <Education />
        <Skills />
        <Projects />
      </section>
    );
  }
}

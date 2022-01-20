import React, { Component } from "react";
import badge from "../img/badge.png";

export default class Skills extends Component {
  state = {
    front: [
      {
        title: "HTML",
        skill: "skill-95",
      },
      {
        title: "CSS",
        skill: "skill-95",
      },
      {
        title: "SCSS",
        skill: "skill-85",
      },
      {
        title: "Bootstrap",
        skill: "skill-80",
      },
      {
        title: "Javascript",
        skill: "skill-80",
        certified: "https://www.hackerrank.com/certificates/fde4b743dd24",
      },
      {
        title: "Three.js",
        skill: "skill-60",
      },
      {
        title: "React.js",
        skill: "skill-65",
      },
    ],
    design: [
      {
        title: "Photoshop",
        skill: "skill-90",
      },
      {
        title: "Illustrator",
        skill: "skill-85",
      },
      {
        title: "Figma",
        skill: "skill-95",
      },
    ],
  };

  render() {
    return (
      <div className="skills">
        <h3>Skills</h3>
        <div className="front">
          <h4>Front End</h4>
          <p>1 Year Exprience</p>
          <div className="boxes">
            {this.state.front.map((box, key) => {
              return (
                <div key={key} className="box">
                  <h5>
                    {box.title}
                    {box.certified ? (
                      <a href={box.certified}>
                        <img alt="certified" src={badge} />
                      </a>
                    ) : (
                      ""
                    )}
                  </h5>
                  <div className="skill-bar">
                    <span className={box.skill}></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="design">
          <h4>Design</h4>
          <p>2 Years Exprience</p>
          <div className="boxes">
            {this.state.design.map((box, key) => {
              return (
                <div key={key} className="box">
                  <h5>{box.title}</h5>
                  <div className="skill-bar">
                    <span className={box.skill}></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

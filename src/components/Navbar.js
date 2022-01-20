import React, { Component } from "react";
import Button from "./Button";

export default class Navbar extends Component {
  constructor() {
    super();
    this.changeNavBackground();
  }

  state = {
    navLinks: ["Home", "About", "Portfolio", "Contact"],
    button: {
      title: "My Youtube Channel",
      link: "https://www.youtube.com/channel/UCEqUQX-aWPRmcbaI4Hjd2ew",
    },
    activeLink: "Home",
    navActive: false,
    navBackground: false,
  };

  setLink = (link) => {
    this.setState({ activeLink: link });
    this.setState({ navActive: false });

    let linkLow = link.toLowerCase();

    document.querySelector(`#${linkLow}`).scrollIntoView();
  };

  setNav = (active) => {
    this.setState({ navActive: active ? false : true });
  };

  changeNavBackground = () => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 0) this.setState({ navBackground: true });
      else this.setState({ navBackground: false });
    });
  };

  render() {
    return (
      <div
        className={`nav${this.state.navActive ? " active" : ""}${
          this.state.navBackground ? " bg-dark" : ""
        }`}
      >
        <h1>Vusal Huseynov</h1>

        <ul>
          {this.state.navLinks.map((link, key) => {
            return (
              <li key={key}>
                <span
                  className={this.state.activeLink === link ? "active" : ""}
                  onClick={() => {
                    this.setLink(link);
                  }}
                >
                  {link}
                </span>
              </li>
            );
          })}
        </ul>

        <Button
          title={this.state.button.title}
          color="red"
          link="this.state.button.link"
        />

        <div
          className="hamburger"
          onClick={() => {
            this.setNav(this.state.navActive);
          }}
        >
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
      </div>
    );
  }
}

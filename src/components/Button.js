import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <a
        className={`button ${this.props.color}`}
        target="_blank"
        rel="noopener noreferrer"
        href={this.props.link}
      >
        {this.props.title}
      </a>
    );
  }
}

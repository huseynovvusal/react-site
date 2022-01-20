import React, { Component } from "react";
import profile from "../img/profile.png";

export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="container">
          <img src={profile} alt="Vusal Huseynov" />
          <div className="about">
            <h3>About</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
              architecto adipisci omnis magni voluptatum voluptatibus impedit
              eveniet. Repellendus numquam voluptatum voluptatibus doloremque
              eum totam maiores, nesciunt ab, doloribus ipsa in. Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Aliquam architecto
              adipisci omnis magni voluptatum voluptatibus impedit eveniet.
              Repellendus numquam voluptatum voluptatibus doloremque eum totam
              maiores, nesciunt ab, doloribus ipsa in.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

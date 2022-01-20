import React, { Component } from "react";
import Button from "./Button";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="left">
          <h4>Vusal Huseynov</h4>
          <p>Front End Developer</p>
        </div>
        <div className="nav"></div>
        <div className="buttons">
          <Button
            title="Youtube"
            link="https://www.youtube.com/channel/UCEqUQX-aWPRmcbaI4Hjd2ew"
            color="red"
          />
          <Button
            title="Facebook"
            link="https://www.facebook.com/vusal.made.1/"
            color="blue"
          />
          <Button
            title="Instargram"
            link="https://www.instagram.com/vusalmade/?hl=tr"
            color="purple"
          />
          <Button
            title="Github"
            link="https://github.com/huseynovvusal"
            color="black"
          />
          <Button
            title="Fiverr"
            link="https://www.fiverr.com/huseynovvusal?up_rollout=true"
            color="green"
          />
        </div>
      </footer>
    );
  }
}

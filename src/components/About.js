import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      {" "}
      <h2>About Me</h2>
      <p>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia harum
        in laboriosam ullam quis perspiciatis praesentium eum! Enim
        necessitatibus reprehenderit obcaecati libero officia aliquid et
        dolores, possimus id iste culpa.{" "}
      </p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;

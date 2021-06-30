import React from "react";
import "../css/home.css"
import { BrowserRouter as Router, Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="container-home">
      <div className="content-1">
        We create our own reality. One, the objective one with trees, streams
        and tigers. And the other, the imagined reality with gods, nations and
        corporations. So I filled mine with romantic thoughts about flowers, the
        universe, and myself. You choose to create yours too.
      </div>
      <div className="content-2">
        This is created to explore the boundaries of two siblings, that is my
        brother and I. He is the designer of the site and I am the content
        creator. My role encompasses everything from deciding the pictures to
        the font color and size! Hope you like what we exhibit here.
      </div>
      <p className="content-3">Happy Exploring :)</p>
      <Link to="/">Know More about my work.....</Link>
    </div>
  );
};

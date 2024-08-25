import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer id="Uses" className="flex">
      <ul className="flex">
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Speaking">Speaking</a>
        </li>
        <li>
          <a href="#Uses">Uses</a>
        </li>
      </ul>
      <p>©2024 All rights reserved </p>
    </footer>
  );
};

export default Footer;

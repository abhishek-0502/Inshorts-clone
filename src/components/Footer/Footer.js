import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="https://www.linkedin.com/in/abhishek-sharma-22a4961a7" target="__blank">
          Abhishek Sharma
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/abhishek_sharma52/" target="__blank">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/abhishek-sharma-22a4961a7" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="" target="__blank">
          <i className="fas fa-link fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
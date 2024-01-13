import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import btnimg from "../../assets/hireme.png"
import MohammedRahidKhanCV from "../../assets/MohammedRahidKhan-CV.pdf"

const Intro = () => {
  return (
    <section id="intro">
      <div className="introcontent">
        <span className="hello">Hello,</span>
        <span className="introtext">
          I'm <span className="introname">Rahid</span> <br />
          Web Developer
        </span>
        <p className="intropara">
          I am a skilled web developer in creating visually and <br />user friendly
          websites.
        </p>
        <a href={MohammedRahidKhanCV} download="cv">
        <button className="btn"><img src={btnimg} alt="Hire me" className="btnimg"/>Download My CV</button>
        </a>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;

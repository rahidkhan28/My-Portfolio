import React from "react";
import design from "../../assets/ui-design.png";
import webdesign from "../../assets/website-design.png";
import appdesign from "../../assets/app-design.png";
import "./skills.css"

const Skill = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What i do</span>
      <span className="skillDescription">
        I am a skilled and passionate web designer, creating visually and
        user-friendly websites. I have a strong understanding of design and a
        keen eye for detail. I am proficient in HTML, CSS, Javascript and React.
      </span>
      <div className="skillBars">
        <div className="skillBar">
            <img src={webdesign} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Web Design</h2>
                <p>This is a demo test This is a demo test This is a demo testThis is a demo test</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={design} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Web Design</h2>
                <p>This is a demo test</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={appdesign} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Web Design</h2>
                <p>This is a demo test</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;

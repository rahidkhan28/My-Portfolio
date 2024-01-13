import React from "react";
import "./works.css";
import portfolio1 from '../../assets/portfolio-1.png'
import portfolio2 from '../../assets/portfolio-2.png'
import portfolio3 from '../../assets/portfolio-3.png'
import portfolio4 from '../../assets/portfolio-4.png'
import portfolio5 from '../../assets/portfolio-5.png'
import portfolio6 from '../../assets/portfolio-6.png'


const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDescription">
        I take pride in paying attemtion to the smallest details and making sure
        that my work is pixel perfect. I am excited to bring my skills and
        expirence to help business achieve their goals and create a strong
        online presence.
      </span>
      <div className="worksImgs">
        <img src={portfolio1} alt="" className="worksImg" />
        <img src={portfolio2} alt="" className="worksImg" />
        <img src={portfolio3} alt="" className="worksImg" />
        <img src={portfolio4} alt="" className="worksImg" />
        <img src={portfolio5} alt="" className="worksImg" />
        <img src={portfolio6} alt="" className="worksImg" />
      </div>
    </section>
  );
};

export default Works;
import React from "react";
import design from "../../assets/ui-design.png";
import webdesign from "../../assets/website-design.png";
import appdesign from "../../assets/app-design.png";
import "./skills.css";

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
            <h2>Front End</h2>
            <p>
              I am a skilled Frontend Developer known for crafting visually
              appealing and responsive web interfaces. Proficient in HTML, CSS,
              and JavaScript, i seamlessly translates design concepts into
              engaging user experiences. With expertise in popular framework
              like React, i bring a dynamic touch to web development, ensuring a
              modern and user-friendly approach. I combine technical prowess
              with a commitment to staying abreast of industry trends,
              delivering frontend solutions that elevate digital experiences.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={design} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Back End</h2>
            <p>
              I am a proficient backend developer with a strong foundation in
              creating robust and scalable server-side applications. With a keen
              understanding of programming languages such as Java, Python and
              NodeJs I specialize in designing and implementing efficient
              databases, APIs, and server architecture. My expertise extends to
              optimizing performance, ensuring data security, and seamlessly
              integrating backend systems to meet the dynamic needs of modern
              web and mobile applications. Committed to delivering high-quality
              solutions, I am well-versed in the latest technologies and best
              practices within the backend development landscape.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={appdesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Database</h2>
            <p>
              I am a skilled professional with expertise in database management,
              proficient in both SQL and MongoDB. With a strong foundation in
              designing and optimizing relational databases using SQL, as well
              as implementing and maintaining NoSQL databases like MongoDB, I
              bring a comprehensive understanding of data modeling, query
              optimization, and database administration. My ability to
              seamlessly work across different database paradigms allows me to
              deliver efficient and scalable solutions tailored to meet the
              specific needs of diverse projects. Committed to data integrity
              and performance, I am well-equipped to contribute to the success
              of projects requiring robust database management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;

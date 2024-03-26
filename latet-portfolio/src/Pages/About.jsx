import React from "react";
import myImage from "../assets/About.png";
import { animateScroll as scroll } from 'react-scroll'; // Import animateScroll from react-scroll

import "../Styles/About.css";

function About() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <div className="app-background">
        <div className="section-About">
          <h1>About Me</h1>
          <div className="half-row">
            <p>
              <span className="emoji">👋</span>Hello, I'm Ezekiel Onjura (
              <strong>Dakdak</strong>) - Front-End Web Developer Extraordinaire!
              As an enthusiastic front-end web developer, I'm passionate about
              crafting immersive digital experiences that captivate you and
              drive engagement. Allow me to introduce myself and share a glimpse
              into my journey as a creative technologist dedicated to pushing
              the boundaries of web development.
            </p>
            <img src={myImage} alt="Ezekiel Onjura" />
          </div>
        </div>
      </div>

      <div>
        <h2 className="story-head">Storytelling</h2>
      </div>
      <div className="story-section">
        <div className="card first-card">
          <p>
            {" "}
            Growing up, I always had a strong curiosity for technology and its
            potential to connect people and ideas. However, it wasn't until
            recently that I took the leap into the world of web development. My
            journey into web development has been marked by a deep passion for
            learning and a desire to make a meaningful impact in the digital
            landscape. I was fortunate to receive a golden opportunity through{" "}
            <a href="https://www.gladtech.org/">Glad Technology Kenya</a>, which
            allowed me to dive into the field of web development and start my
            career journey. While I may only have a year of experience in the
            field, this opportunity has provided me with valuable hands-on
            experience and exposure to real-world projects.
          </p>
        </div>
        <div className="card">
          <p>
            {" "}
            During this early phase of my career, I've had the opportunity to
            work on a few projects that have allowed me to apply my knowledge
            and skills in a practical setting. While these projects may not be
            extensive, they have provided valuable learning experiences and have
            fueled my enthusiasm to take on more significant challenges in the
            future. Although my journey into web development is still in its
            early stages, I am excited about the opportunities ahead to
            contribute to innovative projects and collaborate with like-minded
            individuals. Each day presents a new opportunity for me to expand my
            knowledge and make a positive difference through my work as a web
            developer.
          </p>
        </div>
      </div>

      <div className="skills">
        <h1>Skills</h1>
        <ul className="skills-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVA SCRIPT</li>
          <li>Bootstrap</li>
          <li>UI/UX Design</li>
          <li>React</li>
        </ul>
      </div>
    </div>
  );
}

export default About;

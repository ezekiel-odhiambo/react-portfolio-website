import React from "react";
import { Link } from "react-router-dom";
import "./Styles/CV.css";

function CV() {
  return (
    <div className="cvbody">
      <div className="paper-background">
        <header id="info">
          <div className="left">
            <h1>Ezekiel-Onjura</h1>
            <h2>Web Developer</h2>
          </div>
          <div className="right">
            <strong>Email:</strong>{" "}
            <a href="mailto:onjuraezekiel2@gmail.com">
              onjuraezekiel2@gmail.com{" "}
            </a>
            <br />
            <strong>Github:</strong>{" "}
            <a href="https://github.com/ezekiel-odhiambo">
              https://github.com/ezekiel-odhiambo
            </a>
          </div>
        </header>
        <main>
          <hr />
          <section id="Profile">
            <div class="left">
              <h3>Profile</h3>
            </div>
            <div class="right">
              <p>I am a Web Developer from Kibra, Nairobi, Kenya.</p>
              <p>
                Highly skilled and creative web developer with few years of
                experience specializing in front-end development. Proficient in
                HTML5, CSS3, JavaScript, and modern frameworks such as React and
                Angular. Strong problem-solving abilities and a passion for
                creating visually appealing and user-friendly websites.
                Committed to staying up-to-date with the latest industry trends
                and technologies.
              </p>
            </div>
          </section>

          <hr />
          <section id="Skills">
            <div class="left">
              <h3>Skills</h3>
            </div>
            <div class="right">
              <ul>
                <li>
                  Front-end Development: HTML5, CSS3, JavaScript, React,
                  Angular, Bootstrap
                </li>
                <li>leadership developements</li>
                <li>
                  User Interface (UI) Design: Wireframing, Prototyping,
                  Responsive Design
                </li>
                <li>Web Accessibility: WCAG 2.0/2.1, ARIA, Semantic HTML</li>
                <li>
                  Cross-Browser Compatibility: Testing, Debugging, Polyfills
                </li>
                <li>Version Control: Git, GitHub, Bitbucket</li>
                <li>
                  SEO Best Practices: Metadata, Schema Markup, Page Speed
                  Optimization
                </li>
              </ul>
            </div>
          </section>

          <hr />
          <section id="experience">
            <div class="left">
              <h3>Experience</h3>
            </div>
            <div class="right">
              <div class="work-item">
                <div class="Work-tittle-left">
                  <h4>Job Tittle</h4>
                  <h5>Company</h5>
                </div>
                <div class="Work-tittle-right">
                  <h5>Dates</h5>
                </div>
              </div>
              <p>Job Discription</p>
            </div>
          </section>

          <hr />
          <section id="Education">
            <div class="left">
              <h3>Education</h3>
            </div>
            <div class="right">
              <p class="school">
                <strong> school</strong>
                <br />
                Bachelor's Degree in Telecommiunication and Information
                Engineering.
                <br />
                Dedan Kimathi University of Technology <br />
                Dates: 2021-2022
              </p>
              <p>
                Kenya Certificate of Secondary Education
                <br />
                Chianda Boys High School
                <br />
                Dates: 2016-2019
              </p>
              <p>
                Kenya Certificate of Primary Education
                <br />
                Kibera Primary School
                <br />
                Dates:2007-2015
              </p>
            </div>
          </section>
        </main>
        <Link to="/" className="back-button">
          ← Home
        </Link>
      </div>
    </div>
  );
}

export default CV;

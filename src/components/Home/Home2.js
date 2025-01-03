import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
            A BRIEF <span className="purple"> INTRODUCTION </span> ABOUT MYSELF
          </h1>
          <p className="home-about-body">
            I am passionate about software development and problem-solving. Through my academic and professional experiences, I have honed my skills in programming and system design.
            <br />
            <br />I am proficient in 
            <i>
              <b className="purple"> C/C++, Java, and Python. </b>
            </i>
            <br />
            <br />
            My interests lie in developing innovative solutions in&nbsp;
            <i>
              <b className="purple">Web Technologies, System-Level Programming, and Data Analysis</b>
            </i>
            &nbsp; with a strong inclination towards improving
            <b className="purple"> performance and efficiency</b>.
            <br />
            <br />
            I enjoy building tools and systems that combine my knowledge of&nbsp;
            <i>
              <b className="purple">database management</b>
            </i>
            and
            <i>
              <b className="purple"> backend development</b>
            </i>
            &nbsp; using technologies like
            <b className="purple"> MySQL, MongoDB, and Java Spring.</b>
            <br />
          </p>
        </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
              <div className="purple-canvas"></div>
            </Tilt>
            
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/heweit2"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://v.douyin.com/iyhF9KRA/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaTiktok />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hewei-tang/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/henry.757"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

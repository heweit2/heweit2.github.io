import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Updated by Henry Tang</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} HT</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/heweit2"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer" 
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://v.douyin.com/iyhF9KRA"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer" 
              >
                <FaTiktok />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/hewei-tang/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/henry.757"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

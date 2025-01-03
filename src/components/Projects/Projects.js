import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container style={{ minHeight: "81vh" }}>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Coconut Libtool"
              description="Inspired by the coconut tree's cohesive and multifunctional nature, Coconut Libtool is an all-in-one data mining and textual analysis tool designed for librarians and enthusiasts. This tool allows users to perform powerful analysis and create visualizations without any prior coding knowledge, making it accessible and user-friendly for all."
              ghLink="https://github.com/faizhalas/library-tools"
              demoLink="https://www.coconut-libtool.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Riffle Beat"
              description="The Riffle Beat Music platform offers an engaging and interactive space for music enthusiasts to connect, collaborate, and compete. Designed for users to sing their favorite songs alongside matched players, this project aspires to bring music lovers closer by fostering collaboration, creativity, and fun on a unified platform."
              ghLink="https://github.com/Estoquodaude/RiffleBeat/"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

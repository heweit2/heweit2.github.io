import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Henry Tang </span>
            from <span className="purple"> China.</span>
            <br />
            I am currently an Undergraduate Student at the University of Illinois at Urbana-Champaign.
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing with guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Stars can't shine without darkness. Keep fighting!"{" "}
          </p>
          <footer className="blockquote-footer">Henry</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

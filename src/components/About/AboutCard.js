import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Sumit Singh </span>
            from <span className="purple"> Huntingdon Valley, PA, USA.</span>
            <br /> I hold a master's degree in Computer Information Systems.
            <br />
            Additionally, I have worked as a Systems Engineer at CSimplify-IT Limited for 1 years.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Calisthenics 🤸‍♂️
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Tech 👨🏻‍💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling ✈
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

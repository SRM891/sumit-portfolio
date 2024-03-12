import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import course from "../../Assets/Projects/course2.png";
import Connector from "../../Assets/Projects/connector.png";
import { ImArrowRight2 } from "react-icons/im";
import Dalle from "../../Assets/Projects/Dall-e_Image.png";
import generator from "../../Assets/Projects/recipeGenerator.png";

function Projects() {
  return (
    {/* <Container fluid className="project-section">
      <Particle />
      <Container>s
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dalle}
              isBlog={false}
              title="OpenAi Dall-e clone"
              description={
                <>
                  Created a DALL-E-inspired AI image generation system using Node.js and Express.js for the backend and React.js for the frontend. Incorporated the ChatGPT API to produce images from text descriptions and leveraged Cloudinary for storage, saving the image URLs in MongoDB for convenient access.
                  <br />
                  <br />
                  Technology used: 
                  <br />
                  <ImArrowRight2 /> Mern stack
                  <br />
                  <ImArrowRight2 /> Tailwind
                  <br />
                  <ImArrowRight2 /> OpenAI's DALL-E model, Cloudinary API
                </>
              }
              ghLink="https://github.com/MeghanaNalla/Dall-e"
              demoLink="https://dalle-images.netlify.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={generator}
              isBlog={false}
              title="Recipe Generator"
              description={
                <>
                  This application employs PyTube to extract video and audio content from a YouTube video URL. Subsequently, the audio file is processed through OpenAI's Whisper to obtain the transcript. Finally, the recipe is generated using OpenAI's text-davinci-003 model.
                  <br />
                  <br />
                  Technology used: 
                  <br />
                  <ImArrowRight2 /> Streamlit, PyTube
                  <br />
                  <ImArrowRight2 /> OpenAI's text-davinci-003 model, OpenAI Whisper-1
                </>
              }
              ghLink="https://github.com/MeghanaNalla/RecipeMaker/tree/main"
              demoLink="https://recipemaker-q7pc.onrender.com/"   
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Connector}
              isBlog={false}
              title="Connectar"
              description={
                <>
                  This web application facilitates contact organization by sending notifications based on user-set frequencies.For example, if you wish to reach out to a contact once a week, the system will send a notification prompting you to do so on the designated day.
                  <br />
                  <br />
                  Technology used: 
                  <br />
                  <ImArrowRight2 /> Mern stack
                  <br />
                  <ImArrowRight2 /> React bootstrap
                  <br />
                  <ImArrowRight2 /> Nodemailer
                </>
              }                         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={course}
              isBlog={false}
              title="Course Recomendation system"
              description={
                <>
                  The Course Recommendation System uses an AI chatbot that suggests courses to students based on their interests, skills, and past learning using OpenAI API. It also has a udemy API search, and a Machine learning model available for searching courses"
                  <br />
                  <br />
                  Technology used: 
                  <br />
                  <ImArrowRight2 /> Flask, Javascripts
                  <br />
                  <ImArrowRight2 /> SQLite database
                  <br />
                  <ImArrowRight2 /> OpenAI API, Udemy API, pandas, fuzzywuzzy, sklearn
                </>
              }
            />
          </Col>

        </Row>
      </Container>
    </Container> */}
  );
}


export default Projects;

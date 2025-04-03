import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Navbar,
  Nav,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineBulb, AiOutlineBook, AiOutlineBell } from "react-icons/ai";
import IconNav from "../assets/icon-9.png";
import BackgroundImage from "../assets/bg-3.jpg";
import Icon1 from "../assets/icon-1.png";
import Icon2 from "../assets/icon-2.png";
import Icon3 from "../assets/icon-3.png";
import Icon4 from "../assets/icon-4.png";
import Icon5 from "../assets/icon-5.png";
import Icon6 from "../assets/icon-6.png";
import Icon7 from "../assets/icon-7.png";
import Icon8 from "../assets/icon-8.png";
import Icon9 from "../assets/icon-9.png";

const LandingPage = () => {
  return (
    <>
      <style>{`
        body, html {
          margin: 0;
          padding: 0;
          width: 100%;
          height: auto;
          background-color: #EAE4DD;
          overflow-x: hidden;
        }
    .hero-section {
    background: url(${BackgroundImage}) center/cover no-repeat;
    width: 1290px;
    margin: 1rem;
    height: 561px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    position: relative;
    max-width: 100%;
    margin-left: 130px;
    border-radius: 15px;
    background-color: #EAE4DD;
}


    .hero-content {
    background: rgba(0, 0, 0, 0.7);
    padding: 30px;
    border-radius: 10px;
    max-width: 600px;
  }

          .hero-text h1 {
         font-size: 3rem;
    font-weight: 700;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    text-align: left;
    padding: 3px;
    margin: 0;
        }

       .hero-text p {
    font-size: 1.2rem;
    color: #ddd;
    margin-top: 0px;
    text:align:left;
  }
    .welcome-section {
    background-color: #F5EDE2;
    padding: 0px 20px;
    text-align: center;
  }

  .welcome-section h2 {
    font-size: 2rem;
    font-weight: bold;
  }

  .welcome-section p {
    font-size: 1.1rem;
    color: #444;
  }

        .feature-section {
          text-align: center;
          padding: 0px 20px;
            background-color: #F5EDE2;
        }

        .feature-icon {
          width: 60px;
          height: 60px;
          margin-bottom: 6px;
        }

        .feature-title {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .feature-text {
          font-size: 1rem;
          max-width: 300px;
          margin: 0 auto;
        }
          .KeyFeature-section {
    background-color: #F5EDE2;
    padding: 40px 20px;
    text-align: center;
  }

  .KeyFeature-section h2 {
    font-size: 2rem;
    font-weight: bold;
  }

  .KeyFeature-section p {
    font-size: 1.1rem;
    color: #444;
  }
  
    
        .cta-button:hover {
          background-color: #003366 !important;
          color: white !important;
        }
            #root {
          width: 100vw;
          min-height: 100vh;
          background-color: #F5EDE2;
          font-family: KoHo;
        }
      `}</style>

      <Navbar
        expand="lg"
        style={{ backgroundColor: "#295F98", padding: "10px 30px" }}
      >
        <Container
          fluid
          className="d-flex align-items-center justify-content-between"
        >
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <img src={IconNav} alt="Logo" height="60" />
            <div className="ms-2">
              <h2
                className="text-white fw-bold mb-0"
                style={{ fontSize: "1.5rem" }}
              >
                NoteAlly AI
              </h2>
              <p
                className="text-white mb-0"
                style={{ fontSize: "0.9rem", letterSpacing: "1px" }}
              >
                YOUR STUDY BUDDY
              </p>
            </div>
          </Navbar.Brand>

          <div>
            <Button variant="outline-light" className="me-2 px-3">
              Login
            </Button>
            <Button variant="outline-light" className="px-3">
              Register
            </Button>
          </div>
        </Container>
      </Navbar>

      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "center",
          color: "white",
          padding: "20px",
        }}
      >
        <div className="hero-text">
          <h1>
            Study Smarter with <br />
            NoteAlly AI
          </h1>
          <p>
            Your AI-powered study assistant designed to enhance learning with{" "}
            <br /> smart note-taking, personalized quizzes, and task management.
          </p>
        </div>
      </div>

      <Container fluid className="feature-section">
        <div className="welcome-section">
          <h2>Welcome to NoteAlly</h2>
          <p className="my-0"> Presented by: Golden Wolf Gear</p>
          <p className="my-1">
            A team of innovators combining strength, strategy, and technology to
            create smarter learning solutions.
          </p>
        </div>
        <Row className="justify-content-center">
          <Col md={4} className="text-center">
            <img
              src={Icon1}
              alt="Efficient Learning"
              className="feature-icon"
            />
            <h3 className="feature-title">Efficient Learning & Retention</h3>
            <p className="feature-text">
              Uses spaced repetition to enhance memory and automate review
              schedules for better recall.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <img
              src={Icon2}
              alt="Flexible & Adaptive"
              className="feature-icon"
            />
            <h3 className="feature-title">Flexible & Adaptive</h3>
            <p className="feature-text">
              Users can tailor flashcards to their needs, supporting various
              learning styles.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <img
              src={Icon3}
              alt="Time-Saving & Convenient"
              className="feature-icon"
            />
            <h3 className="feature-title">Time-Saving & Convenient</h3>
            <p className="feature-text">
              Automates flashcard creation and offers easy access across
              multiple devices.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="py-5 text-center">
        <h2 className="fw-bold">Key Features</h2>
        <p className="mb-5">
          NoteAlly AI offers smart tools to simplify studying, making learning
          faster, more engaging, and efficient.
        </p>
        <Row className="gy-5 justify-content-center">
          {[
            {
              title: "Summarize Notes into Key Points",
              icon: Icon4,
              text: "Extracts essential information, condensing notes into concise key points for easier studying.",
            },
            {
              title: "Turns Notes into Flashcards",
              icon: Icon5,
              text: "Automatically converts notes into digital flashcards for quick review and better retention.",
            },
            {
              title: "Creates Personalized Quizzes",
              icon: Icon6,
              text: "Generates quizzes based on flashcards to test understanding and reinforce learning.",
            },
            {
              title: "Includes Pomodoro Timer",
              icon: Icon7,
              text: "A built-in Pomodoro timer enhances focus and productivity by managing study intervals.",
            },
            {
              title: "Uses Active Recall",
              icon: Icon8,
              text: "Encourages memory retention by prompting users to retrieve information rather than passively reviewing.",
            },
          ].map((feature, index) => (
            <Col
              md={6}
              lg={4}
              key={index}
              className="d-flex justify-content-center"
            >
              <Card
                className="p-5 shadow border-0 text-center"
                style={{
                  borderRadius: "15px",
                  maxWidth: "350px",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <Card.Body>
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="mb-3"
                    style={{ width: "50px" }}
                  />
                  <Card.Title className="fw-bold">{feature.title}</Card.Title>
                  <Card.Text>{feature.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Container
        fluid
        className="about-section py-5 text-center"
        style={{ backgroundColor: "#EAE4DD" }}
      >
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="fw-bold" style={{ fontSize: "42px" }}>
              Why Choose NoteAlly AI?
            </h2>
            <p className="mt-3" style={{ fontSize: "18px", lineHeight: "1.8" }}>
              Studying doesn’t have to be stressful or overwhelming. NoteAlly is
              designed to make learning easier, smarter, and more effective.
              Whether you're struggling to keep up with your notes, preparing
              for exams, or just looking for a better way to study, we’ve got
              you covered.
            </p>
            <p className="mt-3" style={{ fontSize: "18px", lineHeight: "1.8" }}>
              With AI-powered features like note summarization, flashcards,
              personalized quizzes, and a Pomodoro timer, NoteAlly helps you
              stay organized, retain key concepts, and make the most of your
              study time. Say goodbye to endless cramming and hello to a more
              focused, efficient, and engaging way to learn. Let NoteAlly be the
              study partner you can always count on!
            </p>
          </Col>
        </Row>
      </Container>
      <footer
        className="text-center py-5"
        style={{ backgroundColor: "#295F98", color: "white" }}
      >
        <h2 className="fw-bold">Enhance Your Learning with NoteAlly AI</h2>
        <Button variant="light" className="px-4 py-2 fw-bold mt-3">
          Get Started for Free
        </Button>
        <p className="mt-3 small">Powered by Golden Wolf Gear</p>
      </footer>
    </>
  );
};

export default LandingPage;

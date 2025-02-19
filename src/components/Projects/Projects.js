import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Weather from "../../Assets/Projects/Weather.png";
import Js from "../../Assets/Projects/Js.png";
import Course from "../../Assets/Projects/Course.png";
import login from "../../Assets/Projects/login.png";
import Tour from "../../Assets/Projects/Tour.png";
import blogs from "../../Assets/Projects/blogs.png";
import Ecomm from "../../Assets/Projects/Ecomm.png"
import react from "../../Assets/Projects/react.png";
import Backend from "../../Assets/Projects/Backend.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Backend}
              isBlog={false}
              title="Back End"
              description="Explore my Node.js and Express backend project, showcasing efficient server-side JavaScript execution. This robust backend, powered by Node.js and Express, prioritizes scalability.

              Technologies include MongoDB for flexible data storage, Postman for API testing, and Cloudinary for media management. Key features encompass a scalable API and robust data security, demonstrating my proficiency in building dynamic and secure backend solutions."
              ghLink="https://github.com/HarshalMjn/BackEnd"
              //demoLink="https://shopping-cart-cf8e6.web.app/"
            />
          </Col>
         <Col md={4} className="project-card">
            <ProjectCard
              imgPath={react}
              isBlog={false}
              title="React-Project"
              description="Step into the world of React with projects that reflect my commitment to building cutting-edge web applications. These projects showcase a fusion of HTML, CSS, and React, emphasizing dynamic and responsive user interfaces. Each project is a testament to my passion for coding and my proficiency in harnessing React's power for exceptional web development."
              ghLink="https://github.com/HarshalMjn"
              //demoLink="https://shopping-cart-cf8e6.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Js}
              isBlog={false}
              title="JavaScript-Projects"
              description=" JavaScript projects that reflect my expertise in web development. These projects encompass a wide range of functionalities, showcasing my ability to create interactive and user-friendly web applications. They are built using a combination of HTML, CSS, and JavaScript, and emphasize dynamic and responsive user interfaces. Each project is a testament to my dedication to continuous learning and my passion for coding in the ever-evolving landscape of web development."
              ghLink="https://github.com/HarshalMjn/JavaScript--Projects"
              // demoLink=""      <--------Please include a demo link here 
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecomm}
              isBlog={false}
              title="Shopping Cart"
              description="A React shopping cart app powered by Redux Toolkit. This app ensures a seamless shopping experience with effortless cart management, real-time updates on totals, and intuitive control. The underlying AppContextProvider, backed by Redux Toolkit, guarantees precision in calculating totals and simplifies item removal. Elevate your shopping journey with the efficiency and power of React Redux Toolkit."
              ghLink="https://github.com/HarshalMjn"
              demoLink="https://shopping-cart-cf8e6.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={login}
              isBlog={false}
             title="RoutesApp"
              description="This is a React web application that includes features like user authentication, a dashboard, and various pages such as Home, About, Contact, Login, and Signup. It also uses React Router for navigation and includes a PrivateRoute component for protecting routes that require authentication."
              ghLink="https://github.com/HarshalMjn/router-project"
              demoLink=":https://router-project-studynotion.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogs}
              isBlog={false}
              title="Code Help Blog"
              description="I created a dynamic blog web app with React and the  featuring pagination . I efficiently managed state using the Context Hook and ensured smooth navigation with React hooks. The project included a dynamic BlogPage component for detailed content and a user-friendly Category Component for easy category exploration."
              ghLink="https://github.com/HarshalMjn/blogs-context-starter"
              demoLink="https://blogsharsh26.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Course}
              isBlog={false}
              title=" online course platform "
              description="I built a React-based online course platform with a focus on user-friendly features. I mastered concepts like the useEffect Hook for dynamic data loading, React Lifecycles for component control, and enhanced user interfaces with React Icons. Each skill added to my toolkit, making me a more versatile developer. 🚀"
              ghLink="https://github.com/HarshalMjn/top-course-app"
              demoLink="https://harshal-top-courses.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title=" Weather App "
              description="The Weather App is a practical project for honing JavaScript fundamentals. It leverages the OpenWeather API to fetch real-time weather data and presents it in a user-friendly interface. Features include displaying current weather conditions, city searches, and location-based weather data. The project utilizes HTML, CSS, and JavaScript for the front-end and the OpenWeather API for data retrieval."
              ghLink="https://github.com/HarshalMjn/WEATHER-APP"
              demoLink="https://weatherwebapp26.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tour}
              isBlog={false}
              title="Welcome to the React Tour Itinerary App!"
              description="This React-based app is designed to provide you with a tour itinerary exploration experience. With the help of the app, you can explore different tours, their descriptions, prices, and even remove tours that don't pique your interest. If you've seen all the available tours and want to start a new, there's a 'Refresh' button that brings back all the tours for you to rediscover."
              ghLink="https://github.com/HarshalMjn/Plan-with-reactApp"
              demoLink="https://planwith-harshal.netlify.app/" 
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

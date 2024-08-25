import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <Row className="justify-content-center mb-3">
          <Col xs="auto">
            <p className="mb-1">Portfolio &copy; 2024 All rights reserved</p>
          </Col>
        </Row>
        <Row className="justify-content-center mb-3">
          <Col xs="auto">
            <p className="mb-1">
              <a
                href="mailto:your.email@example.com"
                className="text-white text-decoration-none">
                abhishekpavi6@gmail.com
              </a>
            </p>
            <p className="mb-1">Vatakara, Kozhikode, India</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="auto">
            <div className="d-flex justify-content-center">
              <a
                href="www.linkedin.com/in/abhishekpavithran"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2">
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://github.com/abhishek-475"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2">
                <FaGithub size={30} />
              </a>
              {/* <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2">
                <FaTwitter size={30} />
              </a> */}
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;

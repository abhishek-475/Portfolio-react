import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function Header() {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary "
        bg="dark"
        data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" style={{fontSize:"40px"}}>Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" ms-auto">
              <Nav.Link to="#home">Home</Nav.Link>
              <Nav.Link to="#works">Works</Nav.Link>
              <Nav.Link to="#skill">Skills</Nav.Link>
              <Nav.Link to="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

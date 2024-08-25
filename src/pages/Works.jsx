import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Works() {
  return (
    <>
      <div className="container-fluid bg-dark text-white p-5">
        <h1 className="my-3 text-center" style={{ fontSize: "40px" }}>
          Works
        </h1>
        <div className="p-4">
          <CardGroup className="mb-3">
            <Card style={{ textAlign: "center", color: "white" }} bg="dark">
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/474x/15/aa/16/15aa1678d4ee5615c5c53ed5c9968126.jpg"
                style={{ width: "100%", height: "150px", objectFit: "contain" }}
              />
             <Card.Body>
              <Card.Title>Flipkart Clone</Card.Title>
              <Card.Text>
                Developed a responsive web app using HTML, CSS & Bootstrap
              </Card.Text>
              <Button variant="primary" target="_blank" href="https://abhishek-475.github.io/Flipkart_Clone_Html_Css_Bootstrap/">View Project</Button>
            </Card.Body>
            </Card>
            <Card style={{ textAlign: "center", color: "white" }} bg="dark">
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg"
                style={{ width: "100%", height: "150px", objectFit: "contain" }}
              />
              <Card.Body>
              <Card.Title>Login Portal</Card.Title>
              <Card.Text>
                Developed login portal using HTMl, CSS & JavaScript
              </Card.Text>
              <Button variant="primary" target="_blank" href="https://abhishek-475.github.io/JS-Mini-Project---JavaScript-Mini-Project---nyci585ss10g/">View Project</Button>
            </Card.Body>
            </Card>
            <Card style={{ textAlign: "center", color: "white" }} bg="dark">
              <Card.Img
                variant="top"
                src="https://png.pngtree.com/png-clipart/20210920/ourmid/pngtree-pen-and-paper-games-tic-tac-toe-games-blue-png-image_3928567.jpg"
                style={{ width: "100%", height: "150px", objectFit: "contain" }}
              />
             <Card.Body>
              <Card.Title>Tic-Tac-Toe</Card.Title>
              <Card.Text>
                Developed a game app using HTML, CSS, JavaScript, React JS
              </Card.Text>
              <Button variant="primary" target="_blank" href="https://main--chipper-griffin-3271d3.netlify.app/">View Project</Button>
            </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
    </>
  );
}

export default Works;

import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Skills() {
  return (
    <>
      <div className="container-fluid bg-dark text-white p-5">
        <h1 className="my-3 text-center" style={{ fontSize: "40px" }}>
          Skills
        </h1>
        <div className="p-4">
          <CardGroup className="mb-3">
            <Card style={{ textAlign: "center", color: "white" }} bg="dark">
              <Card.Img
                variant="top"
                src="https://main--sweet-scone-5a57dd.netlify.app/static/media/html.2ba4fabc69a89a8f71e6.png"
                style={{ width: "100%", height: "150px", objectFit: "contain" }}
              />
              <Card.Body>
                <Card.Title>HTML</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ textAlign: "center", color: "white" }} bg="dark">
              <Card.Img
                variant="top"
                src="https://main--sweet-scone-5a57dd.netlify.app/static/media/css.69a82c2d9e45c933a9cb.png"
                style={{ width: "100%", height: "150px", objectFit: "contain" }}
              />
              <Card.Body>
                <Card.Title>CSS</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ textAlign: "center", color: "white" }} bg="dark">
              <Card.Img
                variant="top"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
                style={{ width: "100%", height: "150px", objectFit: "contain" }}
              />
              <Card.Body>
                <Card.Title>Bootstrap</Card.Title>
              </Card.Body>
            </Card>
          </CardGroup>

          <CardGroup className="mb-3">
            <Card style={{ textAlign: "center", color: "white" }} bg="dark">
              <Card.Img
                variant="top"
                src="https://main--sweet-scone-5a57dd.netlify.app/static/media/javascript.1ccd6ef9bb1f9c84ef00.png"
                style={{ width: "100%", height: "150px", objectFit: "contain" }}
              />
              <Card.Body>
                <Card.Title>JavaScript</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ textAlign: "center", color: "white" }} bg="dark">
              <Card.Img
                variant="top"
                src="https://main--sweet-scone-5a57dd.netlify.app/static/media/react.0cf951a69d8e58f83f9d.png"
                style={{ width: "100%", height: "150px", objectFit: "contain" }}
              />
              <Card.Body>
                <Card.Title>React</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ textAlign: "center", color: "white" }} bg="dark">
              <Card.Img
                variant="top"
                src="https://main--sweet-scone-5a57dd.netlify.app/static/media/Java.6c64373d3b7415758078.png"
                style={{ width: "100%", height: "150px", objectFit: "contain" }}
              />
              <Card.Body>
                <Card.Title>Java</Card.Title>
              </Card.Body>
            </Card>
          </CardGroup>
          <CardGroup className="mb-3">
            <Card style={{ textAlign: "center", color: "white" }} bg="dark">
              <Card.Img
                variant="top"
                src="https://main--sweet-scone-5a57dd.netlify.app/static/media/github.3b9e32903aa89111875d.png"
                style={{ width: "100%", height: "150px", objectFit: "contain" }}
              />
              <Card.Body>
                <Card.Title>Github</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ textAlign: "center", color: "white" }} bg="dark">
              <Card.Img
                variant="top"
                src="https://main--sweet-scone-5a57dd.netlify.app/static/media/netlify.603ef81c872f9df8c343.png"
                style={{ width: "100%", height: "150px", objectFit: "contain" }}
              />
              <Card.Body>
                <Card.Title>Netlify</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ textAlign: "center", color: "white" }} bg="dark">
              <Card.Img
                variant="top"
                src="https://www.kreaweb.be/wp-content/uploads/2023/03/mysql.webp"
                style={{ width: "100%", height: "150px", objectFit: "contain" }}
              />
              <Card.Body>
                <Card.Title>MySQL</Card.Title>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
    </>
  );
}

export default Skills;

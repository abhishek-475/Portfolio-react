// import React from "react";
// import { Row, Col } from "react-bootstrap";
// import Image from 'react-bootstrap/Image';

// function Home() {
//   return (
//     <>
//       <div className="container-fluid bg-dark text-white p-5">
//       <Row>
//         <Col className="p-5 " sm={12} md={8}>
//           <h2 style={{fontSize:"50px"}}>Abhishek Pavithran</h2>
//           <p style={{textAlign:"justify", fontSize:"25px"}}>I am passionate Front-End Developer. I possess an impressive arsenal of skills in HTML, CSS , JavaScript, Tailwind and React. I excel in desigining and maintaining responisve websites that offer a smooth user experience. I am also a team player who thrives in collabrating with cross-functional teams to produce an outstanding web applications.</p>

//         </Col>
//         <Col sm={12} md={4}>
//         <Image className="my-5 justify-content-center"  src="https://main--sweet-scone-5a57dd.netlify.app/static/media/heroImage.51b2cd6daf33ffe78848.png" width={300} height={400} rounded /></Col>
//       </Row>
//       </div>
//     </>
//   );
// }

// export default Home;

import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function Home() {
  return (
    <div className="container-fluid bg-dark text-white p-5">
      <Row className="align-items-center">
        <Col sm={12} md={8} className="p-5">
          <h2 className="display-4">Abhishek Pavithran</h2>
          <p style={{ textAlign: "justify", fontSize: "1.5rem" }}>
            I am a passionate Front-End Developer with an impressive arsenal of
            skills in HTML, CSS, JavaScript, Bootstrap, and React. I excel in
            designing and maintaining responsive websites that offer a smooth
            user experience. I am also a team player who thrives in
            collaborating with cross-functional teams to produce outstanding web
            applications.
          </p>
        </Col>
        <Col sm={12} md={4} className="text-center my-3 my-md-0">
          <Image
            src="https://main--sweet-scone-5a57dd.netlify.app/static/media/heroImage.51b2cd6daf33ffe78848.png"
            width={300}
            height={400}
            rounded
          />
        </Col>
      </Row>
    </div>
  );
}

export default Home;

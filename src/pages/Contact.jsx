import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function Contact() {
  return (
    <div
      className="bg-dark d-flex align-items-center justify-content-center"
      style={{ height: "80vh" }}>
      <div
        className="form-container p-4 bg-dark rounded"
        style={{ width: "100%", maxWidth: "500px" }}>
        <h1 className="text-center text-white mb-4">Contact</h1>
        <Form>
          <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Abhijith"
              aria-label="Name"
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3">
            <Form.Control
              type="email"
              placeholder="name@example.com"
              aria-label="Email address"
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingTextarea"
            label="Comments"
            className="mb-3">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              aria-label="Comments"
            />
          </FloatingLabel>

          <button type="submit" className="btn btn-success w-100">
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
}

export default Contact;

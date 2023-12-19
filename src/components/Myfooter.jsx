import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function MyFooter() {
  return (
    <Container fluid className=" p-5 bg-secondary">
      <Row>
        <Col className=" d-flex justify-content-center bg-secondary">
          <div> Footer</div>
        </Col>
      </Row>
    </Container>
  );
}

export default MyFooter;

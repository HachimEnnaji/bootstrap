import React from "react";
import AllTheBooks from "./AllTheBooks";
import fantasy from "../data/fantasy.json";
import { Col, Row } from "react-bootstrap";

function MyMain() {
  return (
    <>
      <Row className="mx-5 gy-5">
        {fantasy.map((fantasybook, index) => {
          console.log(fantasybook);
          return (
            <Col xs={12} md={6} lg={3} key={`cardBook-${index}`}>
              <AllTheBooks book={fantasybook} />
            </Col>
          );
        })}
        ;
      </Row>
    </>
  );
}
export default MyMain;

import React from "react";
import AllTheBooks from "./AllTheBooks";
import fantasy from "../data/fantasy.json";
import { Row } from "react-bootstrap";

function MyMain() {
  return (
    <>
      <AllTheBooks />
      <Row>
        {fantasy.map((fantasybook) => {
          return <AllTheBooks book={fantasybook} />;
        })}
      </Row>
    </>
  );
}

export default MyMain;

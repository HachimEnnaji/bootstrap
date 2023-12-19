import React from "react";
import { Card } from "react-bootstrap";
// import { fantasy, history, horror, romance, scifi } from "../data";
// import fantasy from "../data";
function AllTheBooks(props) {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Img variant="top" src={props.img} />

          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            <p>{props.category}</p>
            <p>{props.price}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default AllTheBooks;

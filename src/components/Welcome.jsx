import React from "react";
import { Alert } from "react-bootstrap";

function Welcome() {
  return (
    <div className="text-center">
      <h2> Benvenuti scegliete i vostri libri preferiti</h2>
      <Alert variant="primary">Scegli il tuo libro preferito</Alert>
    </div>
  );
}
export default Welcome;

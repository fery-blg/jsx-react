import React from 'react'
import Card from 'react-bootstrap/Card';


function Name(props) {
  return (
      <Card.Title>{props.name}</Card.Title>
  );
}

export default Name;
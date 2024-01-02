import React from 'react'
import Card from 'react-bootstrap/Card';


function Price(props) {
  return (
      <Card.Text>Price: ${props.price}</Card.Text>
  );
}

export default Price;
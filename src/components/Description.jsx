import React from 'react'
import Card from 'react-bootstrap/Card';

function Description(props) {
    return (
        <Card.Text >{props.description}</Card.Text>
    );
}

export default Description;
import React from "react";
import Card from 'react-bootstrap/Card';

function Image (props){
    console.log(props)
return(
    <Card.Img variant="top" src={props.url} style={{ maxWidth: '50%', height: '50vh' }} />

)}

export default Image 
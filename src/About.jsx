import React from 'react'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const About = () => {
  return (
    <>
    <h1>About</h1>
    <Container>
      <Row>
        <Col>  <Image src="./images/d18.webp "  fluid /></Col>
        <Col>
        <h2>The Flower Company Tale</h2>
         <p>Each milestone, each relationship, every kind of bond calls for a unique celebration. A celebration of moments and emotions that are just blooming, even celebrating those that have already blossomed. For such moments, there are luxury flower arrangements by The Flower Company.
        Aesthetically appealing to the eye, these flower arrangements mark the strength of a bond, bring out the butterfly-blushed smile of an 18-year-old girl, highlight the rouge on a mother’s face when she hears from her distant son. These flowers laden this moment with beauty, luxury and panache and evoke a part of you that only poetry can do justice to</p></Col>
      </Row>
    </Container>
  
       
      

 
    </>
  )
}

export default About
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <div style={{backgroundColor:"black" , color:"white"}} >
        <h1>@The Flower Company</h1>
        <Container>
      <Row>
        <Col>
         <p>Resources</p>
            <p>Terms </p>
            <p>Return policy</p>
            <p>Privacy policy</p>
            <p>Contact us</p>
        </Col>
      </Row> <br />

      <Row>
        <Col> <p>Home</p>
            <p>Shopoccasions</p>
            <p>Floraldecor</p>
            <p>Login</p>
            <p>Explore our social media channels to read about Our latest insights.</p></Col>

     </Row>
     <Row>
     <div>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-twitter"></i></a>
     </div>
     </Row>
     
    </Container>
        

            
            
        
    </div>
  )
}

export default Footer
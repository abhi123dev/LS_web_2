import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

function Footer() {
  return (
    <Navbar bg="dark" variant="light" fixed="bottom" className="#">
      <Container>
       <p style={{color:"white"}}> Made with ❤️ by Abhijeet Dewanda </p>
       <p style={{color:"white"}}> © Copyright|| All rights reserved </p>
      </Container>
    </Navbar>
  );
}

export default Footer;
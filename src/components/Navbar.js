import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function BasicExample() {
  return (
    <Navbar  bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">NOTES MAKING APP BY ABHIJEET</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
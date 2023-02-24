import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../todo-list-icon-17.jpg'

function ColorSchemesExample() {
  return (
    <>
 
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            TODO LIST
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
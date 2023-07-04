import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

export const HeaderPartial = () => {
    return(
    <Navbar expand="lg" bg='dark' data-bs-theme='dark'>
       <Container>
            <Navbar.Brand href="/">Nickterest</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="minhas-pastas">Minhas Pastas</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
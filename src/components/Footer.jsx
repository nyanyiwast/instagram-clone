import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/4amtribe Logo - Original - 5000x5000.png"

const Footer = () => {
     return(
        <Navbar bg="light" variant="light" fixed="bottom" sticky="bottom">
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="4amTribeLogo" className="logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     )
};

export default Footer;
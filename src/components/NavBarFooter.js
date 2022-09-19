import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBarFooter() {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom" className="navbar">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="https://github.com/chloe4E" target="_blank">
            My Github
          </Nav.Link>
          <Nav.Link
            href="https://www.linkedin.com/in/chlo%C3%A9-faurie/"
            target="_blank"
          >
            My Linkedin
          </Nav.Link>
          <Nav.Link href="#" disabled>
            Made by Chloé Faurie Sept. 2022
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBarFooter;

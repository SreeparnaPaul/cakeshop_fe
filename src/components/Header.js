import React from 'react'
import {Nav,Navbar,Container} from "react-bootstrap"
import cakebites from './cakebites.png'

function Header() {
  return (
    <div>
    <Navbar  variant="dark" style={{backgroundColor:"#28040f"}}>
        <Container>
          <Navbar.Brand href="#home">
          <img src={cakebites} width ="200" height="50"/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
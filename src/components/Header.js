import React from 'react'
import {Nav,Navbar,Container,Form,Button} from "react-bootstrap"
import cakebites from './cakebites.png'
import { CgProfile } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';


function Header() {
  return (
    <div>
    <Navbar  variant="dark" style={{backgroundColor:"#28040f",fontSize:"20px"}}>
        <Container>
          <Navbar.Brand href="#home">
          <img src={cakebites} width ="200" height="50"/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            
          </Form>
          <CgProfile style={{width:"40px",height:"40px",color:"grey",marginLeft:"25px"}}/>
            <AiOutlineShoppingCart style={{width:"40px",height:"40px",color:"grey",marginLeft:"25px"}}/>
       </Container>
      </Navbar>
    </div>
  )
}

export default Header
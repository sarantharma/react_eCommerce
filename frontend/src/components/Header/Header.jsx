import React from 'react'
import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import "./Header.css"

const Header = () => {
  return (
    <header>
        <Navbar className='nav-bar' expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>Tharma_Shop</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar-right">
                <LinkContainer to="/cart">
                    <Nav.Link><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/signup">
                    <Nav.Link><i className='fas fa-user'></i>Sign In</Nav.Link>
                </LinkContainer>    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        {/* <Navbar className='nav-bar' expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand href="/">My Shop</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-right">

                        <LinkContainer to="/cart">
                            <Nav.Link><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/login">
                            <Nav.Link><i className='fas fa-user'></i>Sign In</Nav.Link>    
                        </LinkContainer>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> */}
    </header>
  )
}

export default Header
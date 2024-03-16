import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';


const Header = () => {
    return (
        <Navbar className='w' expand='md' fixed="top">
            <LinkContainer to='/'>
                <Navbar.Brand>Redpoint Welding</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='justify-content-around w-100'>
                        <LinkContainer to='/Gallery'>
                            <Nav.Link href="#home">Gallery</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/About_Us'>
                            <Nav.Link href="#link">About Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='Certifications_and_Licenses '>
                            <Nav.Link>Certifications and Licenses</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/Contact_Us'>
                            <Nav.Link>Contact Us</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
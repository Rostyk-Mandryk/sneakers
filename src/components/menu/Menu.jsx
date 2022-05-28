import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

function MenuComponent(props) {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">SNEAKERS</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Головна</Nav.Link>
                        <Nav.Link href="/about">Про нас</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default MenuComponent;
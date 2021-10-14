import React from 'react'
import { Col, Row, Container } from "react-bootstrap";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    Flex,
  } from "../../elements/navbarElement";
import logo from "../icons/fundemy.png";
import coba from "../icons/Try it free.png";

const Navbar = () => {
    return (
        <div className="">
            <Container fluid>
                <Row>
                    <Nav>

                        <Col md={true}>
                            <NavLink className="text-decoration-none" to="/">
                                <Flex>
                                    <img src={logo} width="120" alt="logo" />
                                </Flex>
                            </NavLink>
                        </Col>

                        <Col md={true}>
                            <NavLink className="text-decoration-none" to ="/paket">
                                Pilihan Paket
                            </NavLink>
                        </Col>

                        <Col md={true}>
                            <NavLink classname="text-decoration-none" to="/login">
                                Log in
                            </NavLink>
                        </Col>

                        <Col md={true}>
                            <NavLink className="text-decoration-none" to="/paket">
                                <Flex>
                                    <img src={coba} width="auto" height="50" alt="logo" />
                                </Flex>
                            </NavLink>
                        </Col>
                    </Nav>
                </Row>
            </Container>
        </div>
    )
}

export default Navbar

import React, { useState, useEffect } from 'react'
import { Col, Row, Container, Button, Form, Flex } from "react-bootstrap";
import { NavLink as Link } from "react-router-dom";
import FormContainer from '../component/container/formContainer';
import gambar from '../component/icons/login image2.png'

const Loginpage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
            <FormContainer>
                <Row>
                    <Col className="d-flex justify-content-between">
                        <img src={gambar} width="1920" alt="logo" />
                    </Col>

                    <Col className="d-flex justify-content-between">
                        aaa
                    </Col>
                </Row>
            </FormContainer>
    )
}

export default Loginpage

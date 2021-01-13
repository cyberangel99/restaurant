import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import HeroSlider from "./HeroSlider";
import Navigation from "./Navigation";
export default function Hero() {
    return (
        <Container fluid id="hero">
            <Row>
                <Col className="column_1 hero_col" md={6}><Navigation /><img className="aroma-logo" src='/images/aroma-logo.png' /></Col>
                <Col className="column_2 hero_col" md={6}>
                    <HeroSlider />
                </Col>
            </Row>
        </Container>


    )
}

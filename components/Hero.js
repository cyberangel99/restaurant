import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import HeroSlider from "./HeroSlider";

export default function Hero() {
    return (
        <Container fluid id="hero">
            <Row>
                <Col className="column_1 hero_col"><img className="aroma-logo" src='/images/aroma-logo.png' /></Col>
                <Col className="column_2 hero_col">
                    <HeroSlider />
                </Col>
            </Row>
        </Container>


    )
}

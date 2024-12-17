import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import { HashLink } from 'react-router-hash-link';


export const Banner = ()=>{

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-start">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my gallery</span>
                        <h1>
                            <span className="wrap">Hi I'm Rainny the dino</span>
                            <p className="orange-text">I do art commissions, connect with me if you're interested.</p>
                            <HashLink to='/#connect' style={{ textDecoration: 'none' }}>
                                <button className="connect-button" onClick={()=> console.log('connnect')}>Let's connect <ArrowRightCircle size={25}/></button>
                            </HashLink>
                            
                        </h1>
                    </Col>
                    
                    

                </Row>
            </Container>
        </section>
    )
}
import { Col, Row, Container, Image } from "react-bootstrap";
import toggleIcon from '../assets/img/avatar.webp';


export const About =() =>{
return (
    <Container>
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={4}>
                        <div className="circle-img"></div>
                    {/* <Image clasName="circle-img" src={toggleIcon} roundedCircle /> */}
                    </Col>
                    <Col lg={12} md={6} xl={8}>
                        <h3>
                            About me
                        </h3>
                        <p>I am a passionate in fine art, illustration, avatar, and character design. </p>
                        <p className="hidden-text">My work is heavily inspired by anime, you'll often find characters from Genshin Impact infused with my unique artistic style, blending detailed craftsmanship with imaginative storytelling. </p>
                        <p>Let’s bring your ideas to life through art!</p>
                    </Col>
                </Row>

            </div> 

        </Col>
    </Container>
    
    // <div/>
)}
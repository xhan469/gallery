import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import xiao from "../assets/img/xiao.webp"

export const Contact =()=>{
    const formInitialDetails = {
        name: '',
        email:'',
        message:'',
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch(" https://us-central1-gallery-backend.cloudfunctions.net/app/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code == 200) {
          setStatus({ succes: true, message: 'Message sent successfully'});
        } else {
          setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
        }
      };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) =>{
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    return (
        <section className ="contact" id="connect">
            <Container>
                <Row className="slign-items-center">
                    <Col md={6}>
                        <img className="xiao" src={xiao} alt="Contact me"></img>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} >
                                    <input type="text" value={formDetails.name} placeholder="Your Name" onChange={(e)=> onFormUpdate('name', e.target.value)}></input>
                                </Col>
                                <Col sm={6} >
                                    <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e)=> onFormUpdate('email', e.target.value)}></input>
                                </Col>
                                <Col sm={6} >
                                    <textarea  value={formDetails.message} placeholder="Message" onChange={(e)=> onFormUpdate('message', e.target.value)}></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                            </Row>
                            {
                                status.message && 
                                <Col>
                                    <p className={status.success === false ? "danger":"sucess"}>{status.message}</p>
                                </Col>
                            }
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
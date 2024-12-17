import React from "react";
import { NavBar } from "../components/NavBar";
import CloseIcon from '@mui/icons-material/Close';

import { useState } from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap"

import avatar from "../assets/img/avatar.webp";
import banner from "../assets/img/banner-bg.webp";
import piano from "../assets/img/piano.webp";
import hogwarts from "../assets/img/hogwarts.webp";
import albedo from "../assets/img/albedo.webp";
import klee from "../assets/img/klee.webp";
import agon from "../assets/img/agon.webp";


function Gallery() {
    let data = [
        {
            id:1,
            imgSrc: banner,
        },
        {
            id:2,
            imgSrc: piano,
        },
        {
            id:3,
            imgSrc: hogwarts,
        },
        {
            id:4,
            imgSrc: albedo,
        },
        {
            id:5,
            imgSrc: klee,
        },
        {
            id:6,
            imgSrc: agon,
        },
    ]

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');


    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return(
        
        
            <div className ="gallery-div" >
                <div className={model? "model open":"model"}>
                    <img src={tempImgSrc}></img>
                    <CloseIcon onClick={() => { 
                        setModel(false);  
                        setTempImgSrc('');
                    }} />
                </div>

                <NavBar></NavBar>
                <Container className ="gallery">
                    
                    {/* <h1 style={{textAlign:'center'}}>Gallery</h1> */}
                    {data.map((item, index)=>{
                        return(
                            <div className="pics" key={index} onClick={()=>getImg(item.imgSrc)}>
                                <img src={item.imgSrc} style={{width:'100%'}}></img>
                            </div>
                        )
                    })}
                </Container>
            </div>

        
        
    )
}

export default Gallery;
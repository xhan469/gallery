import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon3.svg';
import toggleIcon from '../assets/img/nav-icon2.svg';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom'; // Import NavLink
import { HashLink } from 'react-router-hash-link';

export const NavBar =() =>{
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        const pathname = location.pathname;
        if (pathname === '/') {
          setActiveLink('home');
        } else if (pathname === '/gallery') {
          setActiveLink('gallery');
        }
        // Add more conditions for other routes as needed
      }, [location]);

    useEffect(() => {
        const onScroll = () =>{
            if(window.scrollY >50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return ()=> window.removeEventListener("scroll", onScroll);
    }, []);

    const handleToggle = () => {
        setIsNavOpen(!isNavOpen);  // Toggle the navbar open/close
        if (!isNavOpen) {
          setScrolled(true);  // Add 'scrolled' class when opening the navbar
        } else {
          setScrolled(false); // Remove 'scrolled' class when closing the navbar
        }
      };

    const onUpdateActiveLink =(value) =>{
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled":""}>
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt="logo"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}
            style={{
                outline: 'none',
                boxShadow: 'none',
                border: 'none'
              }}>
                <span className ="navbar-toggle-icon">
                <img src={toggleIcon} alt=""/>
                </span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <NavLink to="/" className ={activeLink === 'home'? 'active-navbar-link':'navbar-link'} 
                    onClick={()=>onUpdateActiveLink('home')}>Home</NavLink>
                <NavLink to="/gallery" className ={activeLink === 'gallery'? 'active-navbar-link':'navbar-link'}
                    onClick={()=>onUpdateActiveLink('gallery')}>Gallery</NavLink>
                
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://x.com/rainny469"><img src={navIcon1} alt=""/></a>
                    <a href="https://www.instagram.com/hanxiaoyu0628?igsh=dnVob2g2Z3M1NjMw&utm_source=qr"><img src={navIcon2} alt=""/></a>
                </div>
                <HashLink to='/#connect'>
                    <button className='="vvd' onClick={()=> console.log('connect')}>
                        <span>Let's Connect</span>
                    </button>
                </HashLink>
                
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
} 
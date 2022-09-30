import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { NavLink } from 'react-router-dom';
import '../styles/Carrousel.css'

const Carrousel = () => {
    return (
        <div>
            <div className='col-6 offset-3 text-center position-absolute mt-5' style={{zIndex:1, color: 'var(--orange)'}}>
                <h1 className='display-2'>CHOCO PAP</h1>
            </div>
            <div className="position-absolute top-50 start-50 translate-middle" style={{zIndex:1}}>
                <div className='mt-md-5'>
                    <NavLink to={'/boutique'} id='btnCaroussel' className='btn btn-lg mt-md-5'>VOIR LA BOUTIQUE</NavLink>
                </div>
            </div>
            <Carousel >
                <Carousel.Item style={{height:600}}>
                    <img
                    className="d-block w-100 imgFlou"
                    src='./images/accueil1.jpg'
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item style={{height:600}}>
                    <img
                    className="d-block w-100 imgFlou"
                    src='./images/accueil2.jpg'
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item style={{height:600}}>
                    <img
                    className="d-block w-100 imgFlou"
                    src='./images/accueil3.jpg'
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
        
    );
};

export default Carrousel;
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Navigation.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Navigation = () => {

    const[show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    return (
        <Navbar expand="lg" style={{backgroundColor:'var(--marron)'}}>
            <Container fluid >
                <Navbar.Brand className='ms-2'>
                    <NavLink to={'/'}><img src="./images/logo.png" alt="logo" width={70}/></NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto offset-lg-7 offset-xl-8 fs-4" style={{ maxHeight: '100px' }} navbarScroll>
                        <ul className='d-lg-flex mb-0 px-0' >
                            <NavLink to={'/'} className='me-2 lien pt-md-2 px-4'><li title='vers la page accueil'>Acceuil</li> </NavLink>
                            <NavLink to={'/boutique'} className='me-2 lien pt-md-2 pe-4'> <li title='vers la boutique'>Boutique</li></NavLink>
                            <NavLink  className='me-2 lien pt-md-2 pe-4' onClick={handleShow}><li title='ouvrir le panier'><span>2 </span><img src="./images/panier.png" alt="iconPanier" className='panier'/></li></NavLink> 
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <div className='container-fluid row'>
                        <div className='col-1 btnClose pt-2'>
                            <img src="./images/close.png" alt="" style={{width:30}} onClick={handleClose}/>
                        </div>
                        <h2 className='col-1 offset-4 pt-2'>PANIER</h2>
                    </div>
                </Modal.Header>
                <Modal.Body>
                </Modal.Body>
                <Modal.Footer>
                    <div className='container-fluid row text-center p-3'>
                        <h2 className='mb-4'>TOTAL : XX €</h2>
                        <Button className='mb-4 btnPanier'>
                            REINITIALISER LE PANIER
                        </Button>
                        <Button className='btnPanier'>
                            VALIDER LE PANIER
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </Navbar>
    );
};

export default Navigation;
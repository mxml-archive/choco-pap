import React from 'react';
import Carrousel from '../components/Carrousel';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Acceuil = () => {
    return (
        <div>
            <Navigation/>
            <Carrousel/>
            <Footer/>
        </div>
    );
};

export default Acceuil;
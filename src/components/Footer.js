import React from 'react';

const Footer = () => {
    return (
        <div className='container-fluid' style={{backgroundColor:'var(--marron)'}}>
            <div className='row'>
                <div className='col-10 col-lg-4 pt-4 ps-4 p-lg-5' style={{color:'var(--orange)'}}>
                    <h3 className='h1'>Choco Pap</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut tenetur sapiente, dolores distinctio eum, quaerat fuga impedit vel tempora veniam mollitia, similique aliquid! Veritatis vitae at cumque maiores veniam facilis.</p>
                </div>
                <div className='col-10 col-lg-4 pt-4 ps-4 p-lg-5' style={{color:'var(--orange)'}}>
                    <h3 className='h1'>Contact</h3>
                    <address className='lh-1'>
                        <p>Adresse : <span>51 rue du chocolat 75000 Paris</span></p>
                        <p>Téléphone : <span>01 23 45 67 89</span></p>
                        <p>Horaires : <span>9h00 - 17h00 du Lundi au vandredi</span></p>
                    </address>
                </div>
                <div className='col-10 col-lg-4 pe-5 ps-0'>
                    <img src="./images/reseaux.png"  className='img-fluid ' alt="iconeReseaux" title='vers les reseaux sociaux'/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
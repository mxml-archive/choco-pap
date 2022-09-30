import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Card.css'
import '../styles/Produit.css'
import Produit from './Produit';

const Card = ({produit}) => {
    return (
        <NavLink to='/FicheProduit'className='col-12 col-md-5 col-lg-3 my-3 my-md-2 mx-0 mx-md-3 px-0 rounded' id='card'>
            <li >
                <div>
                    <img src={produit.image} alt={produit.title} className='img-fluid rounded-top'/>
                </div>
                <div className='text-center p-3 '>
                    <h2>{produit.title}</h2>
                    <p>{produit.price+'€'}</p>
                    <p>{'Note: '+produit.note}</p>
                    <button className='btnCard' style={{backgroundColor: 'var(--jaune)'}}>Ajouter au panier</button>
                </div>
                <div>
                    <Produit title={produit.title} price={produit.price} description={produit.description} ingredient={produit.ingredients}/>
                    {/* <FicheProduit title={produit.title} price={produit.price} description={produit.description} ingredient={produit.ingredients}/> */}
                </div>
                <div className='d-none'>
                    <div id='divProduit'>
                        <div className='container-fluid row pt-5'>
                            <div className='col-6'>
                                <img src={produit.image} alt="image produit" className='img-fluid p-4'/>
                            </div>
                            <div className='col-6 p-4'>
                                <h1 className=''>{produit.title}</h1>
                                <h2 className='mb-4'>{produit.price} €</h2>
                                <p className='mb-4'>{produit.description}</p>
                                <div>
                                    <input type="number" id='inputNumber' className='rounded me-4' placeholder='Nombre de produit'/>
                                    <button type='button' id='btnProduit' className='rounded'>AJOUTER AU PANIER</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 p-5'>
                            <h3>Ingredients</h3>
                            <p>{produit.ingredients}</p>
                        </div>
                    </div>
                </div>
            </li>
        </NavLink>
    );
};

export default Card;
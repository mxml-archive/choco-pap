import React from 'react';
import '../styles/Produit.css'

const Produit = () => {

    return (
        <div id='divProduit'>
            <div className='container-fluid d-flex flex-column flex-md-row pt-5'>
                <div className='col-6 order-2 order-md-1'>
                    <img src="./images/accueil1.jpg" alt="" className='img-fluid p-4'/>
                </div>
                <div className='col-6 p-4 order-1'>
                    <h1 className='mb-4' id='h1'>NOM DU PRODUIT</h1>
                    <h2 className='mb-4'>PRIX DU PRODUIT €</h2>
                    <p className='mb-4'>DESCRIPTION DU PRODUIT</p>
                    <div>
                        <input type="number" id='inputNumber' className='rounded me-4' placeholder='Nombre de produit'/>
                        <button type='button' id='btnProduit' className='rounded mt-4'>AJOUTER AU PANIER</button>
                    </div>
                </div>
            </div>
            <div className='col-12 p-5'>
                <h3>Ingredients</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, tenetur commodi. Perferendis officiis magni nihil labore aspernatur aut cumque adipisci natus eos. Illo et repellat omnis nostrum perspiciatis rem distinctio eveniet minus vel repellendus at fugiat earum tempora accusantium similique est, fugit iusto necessitatibus rerum voluptates. Iure fugit temporibus non.</p>
            </div>
        </div>
    );
};

export default Produit;
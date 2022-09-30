import React, { useEffect, useState } from 'react';
import JsonData from '../json/products.json'
import Card from './Card';
import '../styles/Liste.css'

const Liste = () => {
    const[data, setData] = useState([]);
    const[selectedRadio,setSelectedRadio] = useState();
    const radios = ["blanc", "lait", "noir", "noix", "fruit", "caramel", "liqueur"]
    const[rangeValue, setRangeValue] = useState(20);
    const[rangeValueNote, setRangeValueNote] = useState(5)

    useEffect(()=>{
        setData(JsonData)
    },[])

    return (
        <div className='container-fluid mx-0 row px-0 content'>
            <div className='text-center py-4 content'>
                <h1>BOUTIQUE</h1>
            </div>
            <div className='col-12 col-md-3 col-lg-2 pt-2 content'>
                <aside className='aside rounded p-3'>
                    <div>
                        <p>Filtres</p>
                        <h3>Categories</h3>
                        <ul className='list-unstyled'>
                            <li>
                                <input className="form-check-input" type="radio" name="tous" id="tous"/>
                                <label htmlFor="tous" className='ps-1'>Tous</label>
                            </li>
                            {radios.map((parfun) => (
                                <li>
                                    <input className='form-check-input' type='radio'  name="tous" id={parfun} onChange={(e) => setSelectedRadio(e.target.id)}/>
                                    <label  htmlFor={parfun} className='ps-1'>{parfun}</label>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3>Prix</h3>
                        <ul className='list-unstyled'>
                            <li>
                                <input type='range' min='1' max='20' defaultValue={rangeValue} onChange={(e) => setRangeValue(e.target.value)}/>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Notes</h3>
                        <ul className='list-unstyled'>
                            <li>
                                <input type='range' min='3' max='5' defaultValue={rangeValueNote} onChange={(e) => setRangeValueNote(e.target.value)}/>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
            <ul className='list-unstyled col-12 col-md-8 col-lg-9 row mx-auto justify-content-between'>
                {data.filter((produit) => produit.price<=rangeValue)
                    .filter((produit) => produit.note<=rangeValueNote)
                    .map((produit,id) => (<Card key={id} produit={produit}/>))}
            </ul>
        </div>
    );
};

export default Liste;
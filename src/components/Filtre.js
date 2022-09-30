import React from 'react';

const Filtre = () => {
    return (
        <aside>
            <div>
                <h3>Categories</h3>
                <form action="" className='form-check'>
                    <input className="form-check-input" type="radio" name="tous" id="tous"/>
                    <label className="form-check-label" for="tous">Tous</label> <br />
                    <input className="form-check-input" type="radio" name="chocolatBlanc" id="chocolatBlanc"/>
                    <label className="form-check-label" for="chocolatBlanc">Chocolat blanc</label><br />
                    <input className="form-check-input" type="radio" name="chocolaLait" id="chocolatLait"/>
                    <label className="form-check-label" for="chocolatLait">Chocolat lait</label><br />
                    <input className="form-check-input" type="radio" name="chocolatNoir" id="chocolatNoir"/>
                    <label className="form-check-label" for="chocolatNoir">Chocolat noir</label><br />
                    <input className="form-check-input" type="radio" name="noixNoisette" id="noixNoisette"/>
                    <label className="form-check-label" for="noixNoisette">Noix/Noisette</label><br />
                    <input className="form-check-input" type="radio" name="fruit" id="fruit"/>
                    <label className="form-check-label" for="fruit">Fruit</label><br />
                    <input className="form-check-input" type="radio" name="caramel" id="caramel"/>
                    <label className="form-check-label" for="caramel">Caramel</label><br />
                    <input className="form-check-input" type="radio" name="liqueur" id="liqueur"/>
                    <label className="form-check-label" for="liqueur">Liqueur</label><br />
                </form>
            </div>
        </aside>
    );
};

export default Filtre;
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Acceuil from './pages/Acceuil';
import Boutique from './pages/Boutique';
import FicheProduit from './pages/FicheProduit';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* route ver la page d'accueil */}
        <Route path='/' element={<Acceuil/>}/>
        {/* route ver la boutique */}
        <Route path='/boutique' element={<Boutique/>}/>
        {/* route vers la page fiche produit */}
        <Route path='/produit/:id' element={<FicheProduit/>}/>
        {/* route vers la page acceuil en cas d'erreur 404 */}
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

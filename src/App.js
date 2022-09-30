import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Produit1 from './components/Produit';
import Acceuil from './pages/Acceuil';
import Boutique from './pages/Boutique';
import FicheProduit from './pages/FicheProduit';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Acceuil/>}/>
        <Route path='/boutique' element={<Boutique/>}/>
        <Route path='/ficheproduit' element={<FicheProduit/>}/>
        <Route path='/produit1' element={<Produit1/>}/>
        <Route path='/*' element={<Acceuil/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

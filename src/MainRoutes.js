import React from 'react';
import { Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import Schedules from './pages/Schedules';
import PriceList from './pages/PriceList';


const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/schedules' element={<Schedules/>} />
      <Route path='/pricelist' element={<PriceList/>} />
    </Routes>
  );
};

export default MainRoutes;
// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Aboutus from '../pages/Aboutus';
import ContactUs from '../pages/ContactUs';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/contact" element={<ContactUs />} />
    
  
    </Routes>
  );
};

export default AppRoutes;

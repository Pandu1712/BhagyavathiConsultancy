// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Aboutus from '../pages/Aboutus';
import ContactUs from '../pages/ContactUs';
import Service from '../pages/Service';
import Team from '../pages/Team';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/services" element={<Service />} />
      <Route path="/team" element={<Team />} />
      {/* Add more routes as needed */}
      {/* <Route path="/careers" element={<Careers />} /> */}
      {/* <Route path="/employers" element={<Employers />} /> */}
      {/* <Route path="/candidates" element={<Candidates />} /> */}
    
  
    </Routes>
  );
};

export default AppRoutes;

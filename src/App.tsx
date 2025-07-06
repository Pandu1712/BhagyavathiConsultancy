// src/App.jsx

import Navbar from './components/Header';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16"> {/* Prevent content hidden behind navbar */}
        <AppRoutes />
        <Footer />
      </div>
    </div>
  );
};

export default App;

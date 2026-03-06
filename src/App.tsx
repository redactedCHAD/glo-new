import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { ServiceAreaPage } from './components/ServiceAreaPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:neighborhoodId" element={<ServiceAreaPage />} />
            <Route path="/:neighborhoodId/:serviceId" element={<ServiceAreaPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Hero from './components/home/Hero';
import Abilities from './components/home/Abilities';
import Experience from './components/home/Experience';

import Portfolio from './components/portfolio/Portfolio';

import ContactHeading from './components/contact/ContactHeading';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <Abilities />
              <Experience />
              <Footer />
              {/* <div style={{ height: '2000px', backgroundColor: 'black' }}></div> */}
            </>
          } />
          <Route path="/home" element={
            <>
              <Header />
              <Hero />
              <Abilities />
              <Experience />
              <Contact />
              <Footer />
              {/* <div style={{ height: '2000px', backgroundColor: 'black' }}></div> */}
            </>
          } />
          <Route path="/portfolio" element={
            <>
              <Header />
              <Portfolio />
              {/* <div style={{ height: '2000px', backgroundColor: 'black' }}></div> */}
            </>
          } />
          <Route path="/contact" element={
            <>
              <Header />
              <ContactHeading />
              <Contact />
              <Footer />
            </>
          } />
        </Routes> 
      </div>
    </Router>
  );
};

export default App;

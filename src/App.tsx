import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Themes from './components/Themes';
import Partners from './components/Partners';
import Schedule from './components/Schedule';
import Prize from './components/Prize';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <About />
      <Themes />
      <Partners />
      <Schedule />
      <Prize />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
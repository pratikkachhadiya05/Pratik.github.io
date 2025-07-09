import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import AdminPanel from './components/AdminPanel';
import type { PortfolioData } from './types';

function App() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData | undefined>(undefined);

  useEffect(() => {
    const stored = localStorage.getItem('portfolioData');
    if (stored) {
      setPortfolioData(JSON.parse(stored));
    }
  }, []);

  // const handleDataUpdate = (newData: PortfolioData) => {
  //   setPortfolioData(newData);
  //   // In a real application, you would save this to a database or local storage
  //   localStorage.setItem('portfolioData', JSON.stringify(newData));
  // };

  return (
    <div className="App">
      <Header portfolioData={portfolioData} />
      <Hero portfolioData={portfolioData} />
      <About portfolioData={portfolioData} />
      <Education portfolioData={portfolioData} />
      <Projects portfolioData={portfolioData} />
      <Contact portfolioData={portfolioData} />
      <Footer portfolioData={portfolioData} />
      {/* <AdminPanel onDataUpdate={handleDataUpdate} /> */}
    </div>
  );
}

export default App;
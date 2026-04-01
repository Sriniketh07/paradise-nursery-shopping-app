import React from 'react';
import './App.css';
import AboutUs from './AboutUs';

const App = () => {
  const handleGetStarted = () => {
    alert("Welcome to Paradise Nursery! 🌱\n\nRedirecting to Plants page... (Feature coming in next tasks)");
    // In real project this would navigate to product listing
  };

  return (
    <div className="App">
      {/* Landing Page */}
      <div className="landing-page">
        <h1>Paradise Nursery</h1>
        <p>Bring Nature Home - Beautiful Indoor Plants</p>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>

      {/* About Us Section */}
      <AboutUs />
    </div>
  );
};

export default App;

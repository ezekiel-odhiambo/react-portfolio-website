import React, { useState } from 'react';
import backgroundImage from "../assets/blue.jpg";
import { animateScroll as scroll } from 'react-scroll'; // Import animateScroll from react-scroll
import '../Styles/Portfolio.css';

function Portfolio() {
  const [activeTab, setActiveTab] = useState('tab1');
  const [showDescription, setShowDescription] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setShowDescription(tab === 'tab3');
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="UniqueApp">
      <div className="UniqueTopContent">
        <div>
          <h1 onClick={scrollToTop}>Projects</h1> {/* Added onClick event to scroll to top */}
        </div>
        <div>
          <p>Briefly describing the projects...</p>
        </div>
      </div>
      <div className="UniqueTabs">
        <button className={`UniqueTabButton ${activeTab === 'tab1' ? 'UniqueActive' : ''}`} onClick={() => handleTabClick('tab1')}>Tab 1</button>
        <button className={`UniqueTabButton ${activeTab === 'tab2' ? 'UniqueActive' : ''}`} onClick={() => handleTabClick('tab2')}>Tab 2</button>
        <button className={`UniqueTabButton ${activeTab === 'tab3' ? 'UniqueActive' : ''}`} onClick={() => handleTabClick('tab3')}>Tab 3</button>
      </div>
      <div className="UniqueProjectCards">
        {activeTab === 'tab1' && (
          <>
            <div className="UniqueCard" style={{ backgroundImage: `url(${backgroundImage})` }}>
              <h3>Project 1</h3>
              <p>Description of Project 1</p>
            </div>
            <div className="UniqueCard" style={{ backgroundImage: `url(${backgroundImage})` }}>
              <h3>Project 2</h3>
              <p>Description of Project 2</p>
            </div>
            <div className="UniqueCard" style={{ backgroundImage: `url(${backgroundImage})` }}>
              <h3>Project 3</h3>
              <p>Description of Project 3</p>
            </div>
            <div className="UniqueCard" style={{ backgroundImage: `url(${backgroundImage})` }}>
              <h3>Project 4</h3>
              <p>Description of Project 4</p>
            </div>
            <div className="UniqueCard" style={{ backgroundImage: `url(${backgroundImage})` }}>
              <h3>Project 5</h3>
              <p>Description of Project 5</p>
            </div>
            <div className="UniqueCard" style={{ backgroundImage: `url(${backgroundImage})` }}>
              <h3>Project 6</h3>
              <p>Description of Project 6</p>
            </div>
          </>
        )}
      </div>
      {showDescription && (
        <div className="UniqueProjectDescription">
          <p>Brief description about the projects...</p>
        </div>
      )}
    </div>
  );
}

export default Portfolio;


import React from 'react';
import './Home.css';
import Nav from "../Nav/Nav";

function Home() {
  return (
    <>
      <Nav />
      <div className="main-container">
              {/* <Nav />
          <div className="nav-container">
              
          </div> */}

          <div className="Hero-container">
              <div className="hero-text">
                  <h1 className="hero-title">CREATING A CONNECTED FUTURE THROUGH TECH</h1>
                  <p className="hero-paragraph">Creating a connected future through the use of innovative technology solutions.</p>
              </div>
          </div>
      </div>
    </>
  );
}

export default Home;

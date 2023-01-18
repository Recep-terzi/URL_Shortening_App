import React from "react";
import "./Home.Module.css";
import image1 from "../../assets/illustration-working.svg";
const Home = () => {
  return (
    <>
      <navbar id="navbar-section">
        <div className="navbar-left">
          <div className="navbar-logo">Shortly</div>
          <div className="navbar-item">
            <div className="item">Features</div>
            <div className="item">Pricing</div>
            <div className="item">Resources</div>
          </div>
        </div>
        <div className="navbar-right">
          <div className="navbar-right-item">
            <div className="item">Login</div>
            <button className="navbar-button">Sign Up</button>
          </div>
        </div>
      </navbar>

      <main id="main-section">
        <div className="main-section-left">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="main-section-button">Get Started</button>
        </div>
        <div className="main-section-right">
          <img src={image1} alt="" />
        </div>
      </main>
    </>
  );
};

export default Home;

import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../homepage.css"

function Home() {
  return (
    <>
      <div className="homepage-text">
        <h1>Welcome to Omeglo!</h1>
      </div>
      <div className="reason">
        <h2>Why Choose Omeglo?</h2>
        <div className="reason-cards">
          <div className="card">
            <h3>Global Connections</h3>
            <p>Meet people from every corner of the world.</p>
          </div>
          <div className="card">
            <h3>Safe & Secure</h3>
            <p>Your privacy is our top priority.</p>
          </div>
          <div className="card">
            <h3>Easy to Use</h3>
            <p>Start chatting in just one click.</p>
          </div>
        </div>
      </div>
      <div className="cta-buttons">
        <Link className="cta2" to="/login">LogIn</Link>
        <Link className="cta" to="/explore">Explore</Link>
      </div>
    </>
  );
}

export default Home;

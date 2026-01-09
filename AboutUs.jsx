import { Link } from "react-router-dom";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome To Paradise Nursery</h1>
        <p>Where Green Meets Serenity</p>
        <Link to="/plants" className="btn">Get Started</Link>
      </div>
    </div>
  );
}

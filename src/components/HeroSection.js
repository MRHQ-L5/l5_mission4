import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero_section">
      <div className="search_bar">
        <form>
          <input className="search_input"></input>
          <button className="search_button">SEARCH</button>
        </form>
      </div>
    </section>
  );
}

import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h6>TURNERS</h6>
      </div>
      <div className="nav_links">
        <div className="nav_button">Menu1</div>
        <div className="nav_button">Menu2</div>
        <div className="nav_button">Menu3</div>
        <button className="login_button">LOGIN</button>
      </div>
    </nav>
  );
}

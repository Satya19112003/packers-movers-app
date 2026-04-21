import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3 className="logo">🚚 MoveIt</h3>

      <ul>
        <li className="active">📦 My Moves</li>
        <li>👤 My Profile</li>
        <li>💰 Get Quote</li>
        <li>🚪 Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
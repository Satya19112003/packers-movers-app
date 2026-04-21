import React, { useState } from "react";
import MoveDetails from "./MoveDetails";
import "./MoveCard.css";

const MoveCard = ({ move }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="card">
      {/* TOP SECTION */}
      <div className="card-top">
        <div className="location">
          <div>
            <p className="label">From</p>
            <p>{move.moving_from}</p>
          </div>

          <div className="arrow">➡️</div>

          <div>
            <p className="label">To</p>
            <p>{move.moving_to}</p>
          </div>
        </div>

        <div className="request">
          <p className="label">Request#</p>
          <p className="request-id">{move.estimate_id}</p>
        </div>
      </div>

      {/* INFO ROW */}
      <div className="info-row">
        <span>🏠 {move.property_size}</span>
        <span>📦 {move.total_items}</span>
        <span>📍 {move.distance} km</span>
        <span>📅 {move.moving_on}</span>
        <span>✔ {move.flexible ? "Flexible" : "Fixed"}</span>
      </div>

      {/* ACTIONS */}
      <div className="actions">
        <button
          className="outline-btn"
          onClick={() => setOpen(!open)}
        >
          {open ? "Hide Details" : "View Move Details"}
        </button>

        <button className="filled-btn">Quotes Awaiting</button>
      </div>

      {/* DISCLAIMER */}
      <p className="disclaimer">
        ⚠ Disclaimer: Please update your move date before two days of shifting
      </p>

      {/* EXPAND */}
      {open && <MoveDetails move={move} />}
    </div>
  );
};

export default MoveCard;
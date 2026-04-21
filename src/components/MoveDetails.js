import React from "react";
import InventoryAccordion from "./InventoryAccordion";
import "./MoveDetails.css";

const MoveDetails = ({ move }) => {
  return (
    <div className="details">
      <h4>Additional Information</h4>
      <p>{move.additional_info || "Test Data"}</p>

      <h4>House Details</h4>

      <div className="house-grid">
        <div>
          <strong>Existing House</strong>
          <p>Floor: {move.old_floor_no}</p>
          <p>Elevator: {move.old_elevator_availability}</p>
        </div>

        <div>
          <strong>New House</strong>
          <p>Floor: {move.new_floor_no}</p>
          <p>Elevator: {move.new_elevator_availability}</p>
        </div>
      </div>

      <h4>Inventory Details</h4>
      <InventoryAccordion inventory={move.items.inventory} />
    </div>
  );
};

export default MoveDetails;
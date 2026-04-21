import React from "react";
import InventoryAccordion from "./InventoryAccordion";

const MoveDetails = ({ move }) => {
  return (
    <div className="bg-gray-50 p-4 rounded">

      <h4 className="font-semibold mb-2">Additional Info</h4>
      <p className="text-sm mb-3">{move.additional_info || "N/A"}</p>

      <h4 className="font-semibold mb-2">House Details</h4>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="font-medium">Existing</p>
          <p>Floor: {move.old_floor_no}</p>
          <p>Elevator: {move.old_elevator_availability}</p>
        </div>

        <div>
          <p className="font-medium">New</p>
          <p>Floor: {move.new_floor_no}</p>
          <p>Elevator: {move.new_elevator_availability}</p>
        </div>
      </div>

      <h4 className="font-semibold mt-4">Inventory</h4>
      <InventoryAccordion inventory={move.items.inventory} />
    </div>
  );
};

export default MoveDetails;

import React, { useState } from "react";
import MoveDetails from "./MoveDetails";

import HomeIcon from "@mui/icons-material/Home";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import RouteIcon from "@mui/icons-material/Route";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const MoveCard = ({ move }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-5">

      {/* TOP */}
      <div className="flex justify-between">
        <div className="flex items-center gap-6">
          <div>
            <p className="text-xs text-gray-500">From</p>
            <p className="font-medium">{move.moving_from}</p>
          </div>

          <span className="text-xl">➡️</span>

          <div>
            <p className="text-xs text-gray-500">To</p>
            <p className="font-medium">{move.moving_to}</p>
          </div>
        </div>

        <div>
          <p className="text-xs text-gray-500">Request#</p>
          <p className="text-orange-500 font-bold">{move.estimate_id}</p>
        </div>
      </div>

      {/* INFO */}
      <div className="flex gap-6 mt-3 text-sm text-gray-700">
        <span className="flex items-center gap-1">
          <HomeIcon fontSize="small" /> {move.property_size}
        </span>

        <span className="flex items-center gap-1">
          <Inventory2Icon fontSize="small" /> {move.total_items}
        </span>

        <span className="flex items-center gap-1">
          <RouteIcon fontSize="small" /> {move.distance} km
        </span>

        <span className="flex items-center gap-1">
          <CalendarMonthIcon fontSize="small" /> {move.moving_on}
        </span>

        <span className="flex items-center gap-1 text-green-600">
          <CheckCircleIcon fontSize="small" />
          {move.flexible ? "Flexible" : "Fixed"}
        </span>
      </div>

      {/* BUTTONS */}
      <div className="mt-4 flex gap-3">
        <button
          onClick={() => setOpen(!open)}
          className="border border-orange-500 text-orange-500 px-4 py-1 rounded hover:bg-orange-50 transition"
        >
          {open ? "Hide Details" : "View Move Details"}
        </button>

        <button className="bg-orange-500 text-white px-4 py-1 rounded">
          Quotes Awaiting
        </button>
      </div>

      {/* DISCLAIMER */}
      <p className="text-xs text-gray-500 mt-2">
        ⚠ Please update your move date before two days of shifting
      </p>

      {/* EXPAND */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          open ? "max-h-[1000px] mt-4" : "max-h-0"
        }`}
      >
        <MoveDetails move={move} />
      </div>
    </div>
  );
};

export default MoveCard;

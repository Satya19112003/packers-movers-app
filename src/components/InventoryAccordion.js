import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const InventoryAccordion = ({ inventory }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="mt-3">
      {inventory.map((cat, index) => (
        <div key={index} className="mb-2 border rounded">

          <div
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            className="flex justify-between items-center bg-gray-100 p-3 cursor-pointer"
          >
            <span className="font-medium">
              {cat.displayName} ({cat.category.length})
            </span>

            <ExpandMoreIcon
              className={`transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </div>

          <div
            className={`transition-all duration-500 overflow-hidden ${
              openIndex === index ? "max-h-96 p-3" : "max-h-0"
            }`}
          >
            {cat.category.map((item, i) => (
              <div
                key={i}
                className="flex justify-between text-sm mb-1"
              >
                <span>{item.displayName}</span>
                <span>{item.order}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InventoryAccordion;

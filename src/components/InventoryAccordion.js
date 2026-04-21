import React, { useState } from "react";
import "./Inventory.css";

const InventoryAccordion = ({ inventory }) => {
  const [open, setOpen] = useState(null);

  return (
    <div>
      {inventory.map((cat, index) => (
        <div key={index}>
          <div
            className="accordion-header"
            onClick={() => setOpen(open === index ? null : index)}
          >
            {cat.displayName} ({cat.category.length})
          </div>

          {open === index && (
            <div className="accordion-body">
              {cat.category.map((item, i) => (
                <div key={i} className="item-row">
                  <span>{item.displayName}</span>
                  <span>{item.order}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default InventoryAccordion;
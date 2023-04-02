import React, { useState } from "react";

const Wobble = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="flex items-center justify-center h-50 bg-gray-100">
      <div
        className={` text-center p-4 bg-cyan-500 ${
          isExpanded ? "animate__wobble" : ""
        }`}
      >
        Wobble
      </div>

      <button
        onClick={handleButtonClick}
        className="ml-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Wobble Toggle
      </button>
    </div>
  );
};
export default Wobble;

import React, { useState } from "react";

const Rotate = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="flex items-center justify-center h-50 bg-gray-100">
      <div
        className={` text-center p-4 bg-green-500 w-20 h-20  text-white ${
          isExpanded ? "animate-spin" : ""
        }`}
      >
        Rotate
      </div>
      <button
        onClick={handleButtonClick}
        className="ml-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Rotate Toggle
      </button>
    </div>
  );
};
export default Rotate;

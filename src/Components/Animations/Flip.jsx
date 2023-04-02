import React, { useState } from "react";

const Flip = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="animate-flip flex items-center justify-center bg-gray-100">
      <div
        className={`text-center p-4 bg-gray-500 text-white ${
          isExpanded ? "animate-flip" : ""
        }`}
      >
        Flip 애니메이션
      </div>

      <button
        onClick={handleButtonClick}
        className="ml-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Flip
      </button>
    </div>
  );
};
export default Flip;

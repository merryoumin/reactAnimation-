import React, { useState } from "react";

const ScaleUp = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div
        className={`  text-center p-4 bg-pink-500 text-white ${
          isExpanded ? "animate-scale-up" : ""
        }`}
      >
        Scale Up 애니메이션
      </div>
      <button
        onClick={handleButtonClick}
        className="ml-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        ScaleUp
      </button>
    </div>
  );
};
export default ScaleUp;

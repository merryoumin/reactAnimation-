import React, { useState } from "react";

const Pulse = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div
        className={`text-center p-4 bg-yellow-500 text-white ${
          isExpanded ? "animate-pulse" : ""
        }`}
      >
        Pulse 애니메이션
      </div>
      <button
        onClick={handleButtonClick}
        className="ml-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Pulse
      </button>
    </div>
  );
};
export default Pulse;

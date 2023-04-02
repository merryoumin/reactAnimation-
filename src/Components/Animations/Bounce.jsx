import React, { useState } from "react";

const Bounce = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div
        className={` text-center p-4 bg-purple-500 text-white ${
          isExpanded ? "animate-bounce" : ""
        }`}
      >
        Bounce 애니메이션
      </div>
      <button
        onClick={handleButtonClick}
        className="ml-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Bounce
      </button>
    </div>
  );
};
export default Bounce;

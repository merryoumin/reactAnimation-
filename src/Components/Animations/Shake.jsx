import React, { useState } from "react";

const Shake = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="flex items-center justify-center h-50 bg-gray-100">
      <div
        className={` text-center p-4 bg-lime-500 text-white${
          isExpanded ? "animate-shake" : ""
        }`}
      >
        Shake 애니메이션
      </div>

      <button
        onClick={handleButtonClick}
        className="ml-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Shake Toggle
      </button>
    </div>
  );
};
export default Shake;

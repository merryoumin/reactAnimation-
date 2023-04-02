import React, { useState } from "react";
function MakeABig() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex items-center justify-center h-100 bg-gray-30">
      <div
        className={`bg-blue-500 w-20 h-20 transition-all duration-500 ease-in-out ${
          isExpanded ? "w-40 h-40" : ""
        }`}
      ></div>
      <button
        onClick={handleButtonClick}
        className="ml-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        MakeABig
      </button>
    </div>
  );
}

export default MakeABig;

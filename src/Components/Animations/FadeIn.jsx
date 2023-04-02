import React, { useState } from "react";
const FadeIn = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div
      className={` animate-fade-in text-center p-4 bg-blue-500 text-white ${
        isExpanded ? "bg-yellow-500 " : ""
      }`}
    >
      Fade In 애니메이션
      <button
        onClick={handleButtonClick}
        className="ml-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Fade In Toggle
      </button>
    </div>
  );
};
export default FadeIn;

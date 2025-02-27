import React from "react";

const Progress = ({ value, max = 100 }) => {
  return (
    <div className="relative w-full h-2 bg-gray-200 rounded">
      <div
        className="absolute top-0 left-0 h-2 bg-blue-500 rounded"
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  );
};

export default Progress;

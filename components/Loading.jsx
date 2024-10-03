import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col flex-1 justify-center items-center h-screen ">
      <div className="relative w-20 h-20">
        {/* Outer Circle */}
        <div className="absolute inset-0 rounded-full border-t-4 border-indigo-500 animate-spin-slow"></div>
        {/* Inner Circle */}
        <div className="absolute inset-1 rounded-full border-t-4 border-indigo-200 animate-spin-fast"></div>
        {/* Center Dot */}
        <div className="absolute w-4 h-4 bg-indigo-500 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <p className="mt-4 text-indigo-700 font-bold text-lg">Loading...</p>
    </div>
  );
};

export default Loading;
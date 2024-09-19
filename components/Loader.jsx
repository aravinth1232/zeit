import React from 'react';


const Loader = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-t-4 border-blue-600 border-solid rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white text-lg">Loading...</div>
        </div>
      </div>
    );
  };

export default Loader;

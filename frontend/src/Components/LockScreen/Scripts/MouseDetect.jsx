import React from "react";

const MouseDetect = ({
  isExiting,
  changeIsExiting,
  changeIsHovering,
  isHovering,
}) => {
  if (isExiting) return null;

  return (
    <div
      className="fixed bottom-0 left-0 w-full h-24 z-50 flex items-end justify-center cursor-pointer"
      onMouseEnter={() => changeIsHovering(true)}
      onMouseLeave={() => changeIsHovering(false)}
      onClick={() => {
        changeIsHovering(false);
        changeIsExiting();
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

      <div className="relative mb-5 text-white/80 drop-shadow-md soft-pulse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </div>
    </div>
  );
};

export default MouseDetect;

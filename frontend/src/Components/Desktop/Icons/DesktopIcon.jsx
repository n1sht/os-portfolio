import React, { useState } from "react";
import { ComputerDesktopIcon } from "@heroicons/react/20/solid";

const DesktopIcon = ({ name, icon: IconComponent, size }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className={`
        flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-200 cursor-default
        ${isHovering ? "bg-white/15 ring-1 ring-white/20 shadow-lg" : "bg-transparent"}
      `}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="text-white drop-shadow-md">
        {IconComponent ? (
          <IconComponent className={`${size ? size : "size-12"}`} />
        ) : (
          <ComputerDesktopIcon className="size-12" />
        )}
      </div>

      <span
        className="
        mt-1 text-xs font-medium text-white 
        drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] 
        tracking-wide
      "
      >
        {name ? name : "Unnamed"}
      </span>
    </div>
  );
};

export default DesktopIcon;

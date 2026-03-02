import React from "react";
import DesktopIcon from "./Icons/DesktopIcon";
import { ComputerDesktopIcon } from "@heroicons/react/20/solid";

const Desktop = () => {
  const wallpaperUrl =
    "https://images.unsplash.com/photo-1530576224787-491411e471b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div
      className="absolute top-0 h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden flex items-center justify-center"
      style={{ backgroundImage: `url(${wallpaperUrl})` }}
    >
      <div
        className="
        w-[95%] h-[90%] 
        relative
        grid grid-cols-10 grid-rows-6 grid-flow-col gap-5 p-8
        
        bg-white/10 
        backdrop-blur-md 
        rounded-2xl 
        border border-white/20 
        shadow-2xl
      "
      >
        <DesktopIcon name="This PC" icon={ComputerDesktopIcon} size="size-12" />
      </div>
    </div>
  );
};

export default Desktop;

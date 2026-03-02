import { useState } from "react";
import LockScreenScreen from "./LockScreenScreen";
import MouseDetect from "./Scripts/MouseDetect";
const LockScreen = () => {
  const [isExiting, setIsExiting] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const handleLockscreen = () => {
    setLockscreen(false);
  };
  const changeIsExiting = () => {
    setIsExiting(true);
  };
  const changeIsHovering = () => {
    setIsHovering(!isHovering);
  };

  const [lockscreen, setLockscreen] = useState(true);
  return (
    <div>
      {lockscreen && (
        <>
          <LockScreenScreen
            toggleLockscreen={handleLockscreen}
            isExiting={isExiting}
            isHovering={isHovering}
          />
          <MouseDetect
            changeIsExiting={changeIsExiting}
            changeIsHovering={changeIsHovering}
            isHovering={isHovering}
          />
        </>
      )}
    </div>
  );
};

export default LockScreen;

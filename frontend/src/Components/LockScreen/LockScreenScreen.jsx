import Clock from "./Clock.jsx";

const LockScreenScreen = ({ toggleLockscreen, isExiting, isHovering }) => {
  const returnClass = () => {
    if (isExiting) return "-translate-y-full";
    if (isHovering) return "-translate-y-20";
    return "translate-y-0";
  };

  return (
    <div>
      <div
        className={`relative min-h-screen fixed inset-0 z-50 transition-transform duration-1000 ease-in-out ${returnClass()}`}
        onTransitionEnd={() => {
          if (isExiting) toggleLockscreen();
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center animate-slow-drift"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1493514789931-586cb221d7a7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          />
        </div>

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex items-center justify-center min-h-screen text-neutral-content text-center">
          <div className="max-w-md">
            <Clock />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockScreenScreen;

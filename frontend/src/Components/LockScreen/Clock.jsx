import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max items-center">
        <div className="flex flex-col p-2 rounded-box text-neutral-content opacity-60">
          <span className="countdown font-mono text-9xl">
            <span style={{ "--value": hours }}></span>
          </span>
        </div>

        <div className="flex flex-col p-2 rounded-box text-neutral-content">
          <span className="countdown font-mono text-9xl opacity-60">
            <span style={{ "--value": Math.floor(minutes / 10) }}></span>
            <span style={{ "--value": minutes % 10 }}></span>
          </span>
        </div>
      </div>

      <p className="text-2xl opacity-60">
        {time.toLocaleDateString(undefined, {
          weekday: "long",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
};

export default Clock;

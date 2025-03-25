import React from "react";
import { createRoot } from "react-dom/client";
import DroneHud from "./DroneHud";

const root = createRoot(document.getElementById("root")!);
root.render(
  <DroneHud
    pitch={10}
    roll={5}
    airspeed={50}
    altitude={1000}
    heading={270}
  />
);
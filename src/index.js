import "./styles/main.scss";
import "@photo-sphere-viewer/core/index.css";
import "@photo-sphere-viewer/markers-plugin/index.css";

import panorama from "./assets/panorama.jpg";
import markers from "./assets/markers.json";

import { MarkersPlugin } from "@photo-sphere-viewer/markers-plugin";
import { Viewer, events } from "@photo-sphere-viewer/core";


const svgStyle = {
  fill: "rgba(255, 0, 0, 0.5)",
  stroke: "rgba(255, 0, 0, 1)",
  strokeWidth: "2px",
};

const viewer = new Viewer({
  container: document.querySelector("#viewer"),
  panorama: panorama,
  plugins: [
    [
      MarkersPlugin,
      {
        markers: markers.map((m) => ({ circle: 20, svgStyle, ...m })),
      },
    ],
  ],
});



viewer.addEventListener(
  events.ReadyEvent.type,
  () => {
    const markersPlugin = viewer.getPlugin(MarkersPlugin);
    markersPlugin.gotoMarker("jens").then(() => {
      markersPlugin.showMarkerTooltip("jens");
    });
  },
  { once: true }
);

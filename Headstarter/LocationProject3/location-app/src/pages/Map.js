import React from 'react';
import '../styles/Map.css'

import { createMap } from "maplibre-gl-js-amplify"; 
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect } from 'react';

async function initializeMap() {
    const map = await createMap({
        container: "map", // An HTML Element or HTML element ID to render the map in https://maplibre.org/maplibre-gl-js-docs/api/map/
        center: [-73.98597609730648, 40.751874635721734], // center in New York
        zoom: 11,
    })
    return map;
}
  
function Map() {
    useEffect( () => {
        async function init() {
        const map = await initializeMap();
      }
      init();
    }, []);
  
    return (
      <div className="Map">
        <div id='map'></div>
      </div>
    );
}
  
export default Map;
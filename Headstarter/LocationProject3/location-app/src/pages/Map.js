import React from 'react';
import '../styles/Map.css'

import { createMap } from "maplibre-gl-js-amplify"; 
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect } from 'react';

async function initializeMap(coords) {
    const map = await createMap({
        container: "map", // An HTML Element or HTML element ID to render the map in https://maplibre.org/maplibre-gl-js-docs/api/map/
        center: [coords[0], coords[1]], // center in New York
        zoom: 11,
    })
    return map;
}
  
function Map() {
    let coords = [-73.98597609730648, 40.751874635721734]; //Manhattan
    navigator.geolocation.getCurrentPosition(
        function(position) {
            coords = [position.coords.latitude, position.coords.longitude];
            console.log(coords);
        },
        function(error) {
            console.error("Error Code = " + error.code + " - " + error.message);
        }
    );

    useEffect( () => {
        async function init() {
        const map = await initializeMap(coords);
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
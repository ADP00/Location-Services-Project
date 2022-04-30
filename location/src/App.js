import React, {useState, useEffect} from 'react';

import './App.css';

import Amplify, {Auth} from 'aws-amplify';
import {Signer} from '@aws-amplify/core';
import awsconfig from './aws-exports';

import ReactMapGL, {
  NavigationControl,
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const mapName = 'HeadstarterMap';

Amplify.configure(awsconfig);

const transformRequest = (credentials) => (url, resourceType) => {
  if (resourceType === "Style" && !url?.includes("://")) {
    url = `https://maps.geo.${awsconfig.aws_project_region}.amazonaws.com/maps/v0/${url}/style-descriptor`;
  }
  if (url?.includes("amazonaws.com")) {
    return {
      url: Signer.signUrl(url, {
        access_key: credentials.accessKeyId,
        secret_key: credentials.secretAccessKey,
        session_token: credentials.sessionToken,
      })
    };
  }

  return {url: url || ""};
};

function App() {
  const [credentials, setCredentials] = useState(null);

  const [viewport, setViewport] = useState({
    longitude: 100,
    latitude: 50,
    zoom: 1,
  });

  useEffect(() => {
    const fetchCredentials = async () => {
      setCredentials(await Auth.currentUserCredentials());
    };
    fetchCredentials();
  }, []);

  return (
    <div>
      {credentials ? (
        <ReactMapGL
          {...viewport}
          width='100%'
          height='100vh'
          transformRequest={transformRequest(credentials)}
          mapStyle={mapName}
          onViewportChange={setViewport}
        >
          <div style={{position: 'absolute', left: 20, top: 20}}>
            <NavigationControl showCompass={false}/>
          </div>
        </ReactMapGL>
      ) : (
        <h1>Map is loading...</h1>
      )}
    </div>
  );
}

export default App;

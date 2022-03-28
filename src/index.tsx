/* eslint import/no-webpack-loader-syntax: off */

import React from 'react';
import { render } from 'react-dom';
import { MapsApp } from './MapsApp';

//@ts-ignore
import mapboxgl from '!mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

if (!navigator.geolocation) {
  const errMessage = 'Tu navegador no tiene acceso a Geolocation';
  alert(errMessage);
  throw new Error(errMessage);
}

mapboxgl.accessToken = `${process.env.REACT_APP_MAPBOX}`;

const docId = document.getElementById('root');

render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  docId,
);

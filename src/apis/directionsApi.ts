import axios from 'axios';

const mapbox_token = `${process.env.REACT_APP_MAPBOX}`;
const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token: mapbox_token,
  },
});

export default directionsApi;

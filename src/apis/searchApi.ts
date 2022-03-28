import axios from 'axios';

const mapbox_token = `${process.env.REACT_APP_MAPBOX}`;
const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    language: 'es',
    access_token: mapbox_token,
  },
});

export default searchApi;
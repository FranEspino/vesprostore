import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const Map = (/*{data}*/) => {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    //lat:data.lat, lng: data.lng
    lat: -7.2225139,
    lng: -79.4304801,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyC-IuHx7oLPJyKolxlNk-wA6OIylSs0SBw">
      <GoogleMap mapContainerStyle={mapStyles} zoom={18} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;

import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

const Map = (props) => {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 0.8430453158654306, lng: -77.6645488387621 }}
    />
  );
};

export default withScriptjs(withGoogleMap(Map));

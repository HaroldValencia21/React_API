import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

const Map = (props) => {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 0.8276348040257075, lng: -77.65207111989355 }}
    />
  );
};

export default withScriptjs(withGoogleMap(Map));

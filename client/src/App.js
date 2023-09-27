import * as React from 'react';
import Map from 'react-map-gl';

function App() {
  return (
    <Map
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      initialViewState={{
        longitude: -95.6,
        latitude: 37.6,
        zoom: 3.5
      }}
      style={{width: '100vw', height: '100vh'}}
      mapStyle="mapbox://styles/syphe/cln10u41p066s01p78zrs75ik"
    />
  );
}

export default App;
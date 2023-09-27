import * as React from 'react';
import Map, {Marker} from 'react-map-gl';
import { listLogEntries } from './API';

const App = () => {

  console.log(listLogEntries);

  return <Map
    mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    initialViewState={{
      longitude: -73,
      latitude: 40,
      zoom: 3.5,
    }}
    style={{width: '100vw', height: 400}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
  >
    <Marker longitude={-73} latitude={40}>
      <img src="./pin.png" />
    </Marker>
  </Map>
}

export default App;
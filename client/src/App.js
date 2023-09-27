import { useState, useEffect } from 'react';
import Map, {Marker} from 'react-map-gl';
import { listLogEntries } from './API';

const App = () => {

  const [viewPort, setViewPort] = useState({
    longitude: -95.6,
    latitude: 37.6,
    zoom: 4,
  });

  const [logEntries, setLogEntries] = useState([]);

  useEffect(() => {
    (async () => {
      const logEntries = await listLogEntries();
      setLogEntries(logEntries);
      console.log(logEntries);
    })();
  }, []);


  return (
      <Map
        {...viewPort}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/syphe/cln10u41p066s01p78zrs75ik"
        onMove={evt => setViewPort(evt.viewPort)}
        style={{ width: "100vw", height: "100vh"}}
      >
        {
          logEntries.map(entry => (
            <Marker key={entry._id} longitude={entry.longitude} latitude={entry.latitude} anchor="top-left">
              <svg className='marker' viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" 
              strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z">
              </path><circle cx="12" cy="10" r="3"></circle>
              </svg>
              <p>{entry.title}</p>
            </Marker>
          ))
        }
      </Map>
  );
}

export default App;
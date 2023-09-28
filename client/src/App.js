import * as React from 'react';
import {useState,useEffect, useMemo} from 'react';
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';

import ControlPanel from './control-panel.js';
import Pin from './pin.js';

import { listLogEntries } from './API.js';

const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const App = () => {

  //Hooks to keep track of component states
  const [popupInfo, setPopupInfo] = useState(null);
  const [logEntries, setLogEntries] = useState([]);
  
  useEffect(() => {
    (async () => {
      const logEntries = await listLogEntries();
      setLogEntries(logEntries);
      console.log(logEntries);
    })();
  }, []);

  //Mapping out entries into MapBox markers
  const pins = useMemo(
    () =>
    logEntries.map((entry, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={entry.longitude}
          latitude={entry.latitude}
          anchor='bottom'
          onClick={e => {
            e.originalEvent.stopPropagation();
            setPopupInfo(entry);
          }}
        >
          <Pin />
        </Marker>
      )),
    [logEntries]
  );

  return (
    <>
      <Map
        initialViewState={{
          latitude: 40,
          longitude: -100,
          zoom: 3.5,
          bearing: 0,
          pitch: 0,
        }}
        mapStyle="mapbox://styles/syphe/cln10u41p066s01p78zrs75ik"
        mapboxAccessToken={TOKEN}
        style={{ width: "100vw", height: "100vh"}}
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />

        {pins}

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              <h3>{popupInfo.title}</h3>
              <p>{popupInfo.description}</p>
              <p>Comments: {popupInfo.comments}</p>
              <p>Rating: {popupInfo.rating}</p>
              <img width="100%" src={popupInfo.image} alt=""/>
              <p>Visted on: {new Date (popupInfo.visitDate).toLocaleDateString()}</p>
            </div>
          </Popup>
        )}
      </Map>

      <ControlPanel />
    </>
  );
}

export default App;
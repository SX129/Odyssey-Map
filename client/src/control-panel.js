import * as React from 'react';

//Control panel component to describe the project
function ControlPanel() {
  return (
    <div className="control-panel">
      <h3> World Tour </h3>
      <p>
        A map showing my most memorable moments from all of my travel destinations.
      </p>
      <div className="source-link">
        <a
          href="https://github.com/SX129/Odyssey-Map"
          target="_new"
        >
          View Code ↗
        </a>
      </div>
    </div>
  );
}

export default React.memo(ControlPanel);
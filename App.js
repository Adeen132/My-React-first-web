import React, { useState } from 'react';
import './App.css';
import SignatureCanvas from 'react-signature-canvas';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function App() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  const [adeen, setAdeen] = useState(0);

  const handleDecrement = (value) => {
    setAdeen(prevAdeen => Math.max(0, prevAdeen - value));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p className="Aaliyan">Adeen <code>Small Practice</code> For React </p>
      </header>

      <div className="a">
        React Counter Application
      </div>

      <div className="color">
        {adeen}
      </div>

      <div className="buttons-container">
        <div className="button-group">
          <button className="class" onClick={() => setAdeen(adeen + 1)}>Add 1</button>
          <button className="class" onClick={() => setAdeen(adeen + 5)}>Add 5</button>
          <button className="class" onClick={() => setAdeen(adeen + 10)}>Add 10</button>
          <button className="class" onClick={() => setAdeen(adeen + 100)}>Add 100</button>
        </div>
        <div className="button-group">
          <button className="class" onClick={() => setAdeen(0)}>Reset</button>
          <button className="class" onClick={() => handleDecrement(1)}>Remove 1</button>
          <button className="class" onClick={() => handleDecrement(5)}>Remove 5</button>
          <button className="class" onClick={() => handleDecrement(10)}>Remove 10</button>
          <button className="class" onClick={() => handleDecrement(100)}>Remove 100</button>
        </div>
      </div>

      <SignatureCanvas
        className='sigCanvas'
        backgroundColor="black"
        penColor='white'
        canvasProps={{ width: 500, height: 150 }}
      />

      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default App;

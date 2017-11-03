import React from 'react';
import ReactDOM from 'react-dom';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

class App extends React.Component {

  const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
))

<MyMapComponent
  isMarkerShown
  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>


  render() {

    return (
      <div>
        <h1>Sup rat pals, imagine a map</h1>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
          {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
        </GoogleMap>
      </div>
    )
  }
}
withGoogleMap(App);

ReactDOM.render(<App />,
document.getElementById('app'));


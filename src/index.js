import React from 'react';
import ReactDOM from 'react-dom';
import React from 'react';
import './style.css';
import Map from './Map';
import Credentials from './Credentials';
import React, { Component } from 'react';
import App from './App';
const mapURL =
  'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyA82TkJlvEvSc3jFgEh3n1E_XpPCEFSN2o';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <Map
          googleMapURL={mapURL}
          containerElement={<div style={{ height: '400px' }} />}
          mapElement={<div style={{ height: '400px' }} />}
          loadingElement={<p>cargando</p>}
        />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

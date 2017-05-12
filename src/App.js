import React, { Component } from 'react';
import './App.css';

//components
import Map from './components/Map';

class App extends Component {
  render() {
    return (
      <div className="container">
          <Map
              containerElement={<div style={{height:`100%`}} />}
              mapElement={<div style={{height:`100%`}} />} />
      </div>
    );
  }
}

export default App;


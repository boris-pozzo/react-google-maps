import React, { Component } from 'react';
import './App.css';

//components
import Map from './components/Map';
import Places from './components/Places';

class App extends Component {
  render() {
    return (
      <div className="container">
          <Map
              containerElement={<div style={{height:`100%`}} />}
              mapElement={<div style={{height:`100%`}} />} />
        <Places />
      </div>
    );
  }
}

export default App;


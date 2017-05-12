import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";


class Map extends Component {

  render(){
    const markers = this.props.markers || []

      return(
        <div className="mapContainer">
       <GoogleMap
          defaultZoom={18}
          defaultCenter={{ lat: 48.896449, lng: 2.1854213 }}>
          {markers.map((marker, index) => (
              <Marker {...marker} />
            )
          )}
      </GoogleMap>
      </div>
      )

  }
}

export default withGoogleMap(Map)



import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, SearchBox } from "react-google-maps";

class Map extends Component {
  render(){
    const markers = this.props.markers || []

    const INPUT_STYLE = {
      boxSizing: `border-box`,
      MozBoxSizing: `border-box`,
      border: `1px solid transparent`,
      width: `240px`,
      height: `32px`,
      marginTop: `27px`,
      padding: `0 12px`,
      borderRadius: `1px`,
      boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
      fontSize: `14px`,
      outline: `none`,
      textOverflow: `ellipses`,
    };

  const POSITION = {
      top: `20px`,
      position: `absolute`,
      right: `40px`,
  };

      return(
        <div className="mapContainer">
       <GoogleMap
          defaultZoom={18}
          defaultCenter={{ lat: 48.896449, lng: 2.1854213 }}>
          {markers.map((marker, index) => (
              <Marker {...marker} />
            )
          )}
               <SearchBox
                ref="searchbox"
                inputPlaceholder="Customized your placeholder"
                controlPosition={POSITION}
                inputStyle={INPUT_STYLE}/>
 
      </GoogleMap>


      </div>
      )
  }
}

export default withGoogleMap(Map)








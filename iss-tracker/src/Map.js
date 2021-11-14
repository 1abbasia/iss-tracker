import React from 'react';
import GoogleMapReact from 'google-map-react'

class Map extends React.Component {



  state = {

  }

  render() {
    const ISS_URL = "http://api.open-notify.org/iss-now.json"
    return (
      <div>
        <GoogleMapReact>
          MAP_PLACEHOLDER
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map;
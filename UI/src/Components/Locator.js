import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Locator = ({lat,long,width,height}) => {
    if(!lat || !long){
      return <div style={{textAlign:"center", color:"gray"}}>Coordinates unavailable</div>
    }
    return (
      <>
        <MapContainer
          center={[lat, long]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: height ,width:width}}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[lat, long]}>
            <Popup>
             {lat} , {long}
            </Popup>
          </Marker>
        </MapContainer>
      </>
    );
}

export default Locator

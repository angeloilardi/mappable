import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "../App.css";
import "leaflet/dist/leaflet.css";
L.Icon.Default.imagePath = "images/";

export default function Map() {
  return (
    <div div className="map">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          url="https://api.mapbox.com/styles/v1/mapsspam/clg6ohmik01lw01pe5vo1t4j0/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFwc3NwYW0iLCJhIjoiY2xnNm83amo5MDg4ajNlcjBocG5hdjAzciJ9.kdTbe8WsLic0PO9Wd_De2g"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

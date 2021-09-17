import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from "./LocationInfoBox";

// Arrow function for map component
const Map = ({ eventData, center, zoom}) => {
    const [locationInfo, setlocationInfo] = useState(null)

    const markers = eventData.map(event => {
        if(event.categories[0].id === 8) {
                return <LocationMarker 
                    lat = {event.geometries[0].coordinates[1]}
                    lng = {event.geometries[0].coordinates[0]} 
                    onClick={() => setlocationInfo({ id: event.id, title: event.title })}/>
        }
        return null
    })

    return (
        <div className='map'>
            {/* Add API key to use GoogleMapReact */}
            <GoogleMapReact
                bootstrapURLKeys = {{key: 'AIzaSyA0Df9zzRuR2DcuMPkLU4HlgbTnHcY4dDQ'}}
                defaultCenter = {center}
                defaultZoom = {zoom}
            >
                {markers}
            </GoogleMapReact>
            {/* Display LocationInfoBox */}
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756 
    },
    zoom: 6
}

export default Map

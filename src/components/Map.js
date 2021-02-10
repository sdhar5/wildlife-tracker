import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'

// Arrow function for map component
const Map = ({ center, zoom}) => {
    return (
        <div className='map'>
            {/* Add API key to use GoogleMapReact */}
            <GoogleMapReact
                bootstrapURLKeys = {{key: 'AIzaSyA0Df9zzRuR2DcuMPkLU4HlgbTnHcY4dDQ'}}
                defaultCenter = {center}
                defaultZoom = {zoom}
            >
                <LocationMarker 
                    lat = {center.lat}
                    lng = {center.lng} />
            </GoogleMapReact>
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

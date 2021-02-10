import { useState, useEffect } from 'react'
import Map from "./components/Map";

function App() {
  const [eventData, seteventData] = useState([])
  const [loading, setloading] = useState(false)
  
  useEffect(() => {
    const fetchEvents = async () => {
      setloading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()

      seteventData(events)
      setloading(false)
    }

    fetchEvents()
    
  }, [])

  return (
    <div>
      { !loading ? <Map eventData={eventData}/> : <div className='loader'></div>}
    </div>
  );
}

export default App;

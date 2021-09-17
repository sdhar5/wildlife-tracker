import { useState, useEffect } from 'react'
import Map from "./components/Map";
import Header from "./components/Header"

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
      
      { !loading ? 
        <div>
          <Header />
          <Map eventData={eventData}/> 
        </div>: 
        <div className='loader'>
          <div className='spinner'></div>
          <h1>Fetching Data</h1>
        </div> 
      }
    </div>
  );
}

export default App;

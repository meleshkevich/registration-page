const url_events = "https://test-api.codingbootcamp.cz/api/5c0eb69c/events"


const fetchEventList = async() => {
    const response = await fetch(url_events)
    const data = await response.json()
    console.log(data)
    
  }
  




export {
    fetchEventList
}  
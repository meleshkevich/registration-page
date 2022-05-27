const url_events = "https://test-api.codingbootcamp.cz/api/5c0eb69c/events"
const post_reg = "https://test-api.codingbootcamp.cz/api/5c0eb69c/events/1/registrations"


const fetchEventList = async() => {
    const response = await fetch(url_events)
    const data = await response.json()
    console.log(data)
    
  }
  
//function which will take data from input and sends to API
//called in Register button
const postRegistration = async() => {
 
  
  const newRegistration = {
    "name": "Tom",
    "surname": "Ka",
    "email": "Tomka@cvv.com",
    "phone_number": "777",
    "age" : "18" ,
    "comment": "blabla"

  }
  const myResponse = await fetch(post_reg, {
    "method": "POST",
    "body": JSON.stringify(newRegistration),
    "headers": {
      'Content-Type': 'application/json'
    }
  })
  
  const myUsableResponse = await myResponse.json()
  console.log(myUsableResponse)
}




export {
    fetchEventList,
    postRegistration
}  
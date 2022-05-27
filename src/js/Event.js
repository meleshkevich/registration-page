class Event {
  constructor(eventData) {
    this.eventData = eventData;

    this.createEvent();
  }
  createEvent = () => {
    const body = document.querySelector("body");
    const newEvent = document.createElement("div");
    newEvent.setAttribute("class", "event");

    //get event data from API and use for  instance
    body.appendChild(newEvent);

    //console.log to test data flow
    console.log(this.eventData);
  };
}

export default Event;

class Event {
  constructor(name) {
    this.name = name;

    this.createEvent();
  }
  // create new instance of Ivent with data from API
  createEvent = () => {
    const container__bottom = document.querySelector(".container__bottom");
    const newEvent = document.createElement("div");
    newEvent.innerHTML = `
     <div class="event1">${this.name}</div>
     <button class='event-btn'>See more</button>`;

    //get event data from API and use for  instance
    container__bottom.appendChild(newEvent);
  };
}

export default Event;

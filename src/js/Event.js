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
     <div class="event1">${this.name}</div>`;
    container__bottom.appendChild(newEvent);

    const see_btn = document.createElement("button");
    see_btn.innerHTML = "See more";
    see_btn.addEventListener("click", (e) => {
      console.log(this.name);
    });
    container__bottom.appendChild(see_btn);
  };
}

export default Event;

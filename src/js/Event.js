class Event {
  constructor(data) {
    this.data = data;

    this.createEvent();
  }
  // create new instance of Ivent with data from API
  createEvent = () => {
    const container__bottom = document.querySelector(".container__bottom");
    const newEvent = document.createElement("div");
    newEvent.innerHTML = `
     <div class="event1">${this.data.name}</div>`;
    container__bottom.appendChild(newEvent);
    // create button with id = index from data array
    const see_btn = document.createElement("button");
    see_btn.setAttribute("id", `${this.data.id}`);

    see_btn.innerHTML = "See more";
    see_btn.addEventListener("click", (e) => {});
    container__bottom.appendChild(see_btn);
  };
}

export default Event;

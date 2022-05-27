class FeatureEvent {
  constructor(data) {
    this.data = data;
    this.createFeaturedEvent();
  }
  //method we use to create new instances od this Class
  createFeaturedEvent = () => {
    const container__top = document.querySelector(".container__top");
    const newFeaturedEvent = document.createElement("div");
    newFeaturedEvent.innerHTML = `
    <img class='event-img' alt='some image' src='${this.data[0].image_url}'>
    <h1 class="main__event">${this.data[0].name}</h2>
    <p class='main__event_description'>${this.data[0].description}</p>
    <button>Register</button>`;

    //get event data from API and use for  instance
    container__top.appendChild(newFeaturedEvent);
    
  };
}

export default FeatureEvent;

class FeatureEvent {
  constructor(name) {
    this.name = name;
    this.createFeaturedEvent();
  }
  createFeaturedEvent = () => {
    const container__top = document.querySelector(".container__top");
    const newFeaturedEvent = document.createElement("div");
    newFeaturedEvent.innerHTML = `
    <h1 class="main__event">${this.name}</h1>`;

    //get event data from API and use for  instance
    container__top.appendChild(newFeaturedEvent);
  };
}

export default FeatureEvent;

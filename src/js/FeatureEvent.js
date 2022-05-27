class FeatureEvent {
  constructor(testFeatured) {
    this.testFeatured = testFeatured;
    createFeaturedEvent();
  }
  createFeaturedEvent = () => {
    const body = document.querySelector("body");
    const newFeaturedEvent = document.createElement("div");
    newFeaturedEvent.setAttribute("class", "event-featured");

    //get event data from API and use for  instance
    body.appendChild(newFeaturedEvent);

    //console.log to test data flow
    console.log(this.testFeatured);
  };
}

export default FeatureEvent;

import FeatureEvent from "./FeatureEvent";
import Event from "./Event";

const url_events = "https://test-api.codingbootcamp.cz/api/5c0eb69c/events";

// create featured event
const fetchEventList_featured = async () => {
  const response = await fetch(url_events);
  const data = await response.json();
  const newFeatured = new FeatureEvent(data);
};

fetchEventList_featured();




const fetchEventList = async () => {
  const response = await fetch(url_events);
  const data = await response.json();
  data.forEach((el) => {
    const newEvent = new Event(el.name);
  });


  const newEvent = new Event(data[0].name);
};
fetchEventList()

<<<<<<< HEAD
import { fetchEventList } from "./dataEventList";
=======
<<<<<<< HEAD
// import { fetchEventList } from "./dataEventList";
import FeatureEvent from "./FeatureEvent";
import Event from "./Event";

const url_events = "https://test-api.codingbootcamp.cz/api/5c0eb69c/events";

// create featured event
const fetchEventList_featured = async () => {
  const response = await fetch(url_events);
  const data = await response.json();
  const newFeatured = new FeatureEvent(data[0].name);
};
=======
>>>>>>> main
>>>>>>> 77008728fd889b8b891481a0f6865044ea972e61

fetchEventList_featured();

<<<<<<< HEAD
console.log("jkjkg") ///<<<<<<can be removed
fetchEventList()
=======
const fetchEventList = async () => {
  const response = await fetch(url_events);
  const data = await response.json();
  data.forEach((el) => {
    const newEvent = new Event(el.name);
  });
>>>>>>> 77008728fd889b8b891481a0f6865044ea972e61

  const newEvent = new Event(data[0].name);
};

fetchEventList();

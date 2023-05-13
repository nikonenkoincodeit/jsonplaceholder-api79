import { getData } from "../api";
import { makeFirstTableMarkup } from "../markup";
import { tablBodyHomeEl } from "../refs";
import { addMarkup } from "../utils";

window.addEventListener("load", init);

function init() {
  getData("users")
    .then((data) => {
      console.log(data);
      const markup = makeFirstTableMarkup(data);
      console.log(markup);
      addMarkup(markup, tablBodyHomeEl);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

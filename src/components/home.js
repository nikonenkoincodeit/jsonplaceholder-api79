import { getData } from "../api";
import { makeFirstTableMarkup } from "../markup";
import { tablBodyHomeEl } from "../refs";
import { addMarkup } from "../utils";

window.addEventListener("load", init);

function init() {
  getData("users")
    .then((data) => {
      const markup = makeFirstTableMarkup(data)
      addMarkup(markup, tablBodyHomeEl);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

tablBodyHomeEl.addEventListener('click', onClick);

function onClick(e) {
  const trEL = e.target.closest('tr');
  if (trEL.nodeName !== 'TR') return
  const userId = trEL.dataset.userid;
  location.href = `user.html?userid=${userId}`;
  console.log(userId);
};
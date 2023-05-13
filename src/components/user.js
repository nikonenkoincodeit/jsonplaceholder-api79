import { getData } from '../api';
import { addMarkup } from '../utils';
import { tablBodyUserEl, userAlbumListEl } from '../refs';
import { userIdMarkup, createAlbumList } from '../markup';

window.addEventListener('load', init);

function init() {
  const params = new URLSearchParams(location.search);
  getData(`users/${params.get('userid')}`)
    .then((data) => {
      const markup = userIdMarkup(data);
      addMarkup(markup, tablBodyUserEl);
    })
    .catch((error) => {
      console.log(error.message);
    });
  getData(`albums?userId=${params.get('userid')}`)
    .then((data) => {
      const markup = createAlbumList(data);
      addMarkup(markup, userAlbumListEl);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

userAlbumListEl.addEventListener('click', onAlbumClick);

function onAlbumClick(evt) {
  const liEl = evt.target.closest('li');
  if (liEl.nodeName !== 'LI') return;
  const albumId = liEl.dataset.id;
  location.href = `album.html?albumid=${albumId}`;
}

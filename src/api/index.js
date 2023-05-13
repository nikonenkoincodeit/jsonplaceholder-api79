const BASE_URL = "https://jsonplaceholder.typicode.com/";

export function getData(params) {
  return fetch(`${BASE_URL}${params}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
}

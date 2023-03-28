

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34824738-bcdb93f3fccf2566ad3e9b4d4';
let page = 1;

fetch(
    `${BASE_URL}?key=${API_KEY}&q=dog&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
).then((res) => res.json()).then(x => console.log(x.hits)).catch((error) => console.log(error));
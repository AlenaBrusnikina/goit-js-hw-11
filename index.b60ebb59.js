fetch("https://pixabay.com/api/?key=34824738-bcdb93f3fccf2566ad3e9b4d4&q=dog&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1").then((e=>e.json())).then((e=>console.log(e.hits))).catch((e=>console.log(e)));
//# sourceMappingURL=index.b60ebb59.js.map

const apiKey = 'AIzaSyDr-hfn4RaXZzUWBfdp5NtiPxOboacEwl0';
const search = document.getElementById('search').value;
const url = `https://api.tenor.com/v1/search?q=${encodeURIComponent(search)}&key=${apiKey}`;
const gifs1= document.getElementById('trendGif')

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Procesar la respuesta JSON para obtener los GIFs
    const gifs = data.results.map(result => result.media[0].gif.url);

    // Mostrar los GIFs en tu aplicación o sitio web
    gifs.forEach(gifUrl => {
      const img = document.createElement('img');
      img.src = gifUrl;
      gifs1.appendChild(img);
    });
  })
  .catch(error => {
    console.error('Error al obtener los GIFs:', error);
  });

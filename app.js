const apiKey = 'AIzaSyDr-hfn4RaXZzUWBfdp5NtiPxOboacEwl0'
const search = document.getElementById('search')
const filterSalient = document.getElementById('salient')
const filterTendency = document.getElementById('featured')
const titulo = document.getElementById('titulo')
const url = 'https://tenor.googleapis.com/v2/search?q='
const TRENDING_URL = "https://tenor.googleapis.com/v2/featured?key="
const limit =30


const featured = async () => {
let trendingURL = `${TRENDING_URL}${apiKey}&limit=${limit}`
titulo.innerHTML="GIFs destacados"
await fetch(trendingURL)
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < limit; i++) {
      let img = document.createElement('img')
      img.src = data.results[i]["media_formats"]["nanogif"]["url"]
      filterSalient.appendChild(img)
    }
  })
  .catch(error => {
    console.error('Error al obtener los GIFs:', error);
  });


}

window.addEventListener("DOMContentLoaded", featured);

function getGif() {
  search.addEventListener('keydown', async function(event){


    if (event.keyCode) {
      filterSalient.innerHTML = ""
      const word= search.value
      console.log(word);

      if (word === "") {
        titulo.innerHTML="GIFs destacados"
        featured()
      }

      titulo.innerHTML=word

      const urlSearch= `${url}${word}&key=${apiKey}&limit=${limit}`

      await fetch(urlSearch)
      .then(response => response.json())
      .then(data => {
        for (let index = 0; index < limit; index++) {
          let img = document.createElement('img')
          img.src = data.results[index]["media_formats"]["nanogif"]["url"]
          filterSalient.appendChild(img)
        }
      })
      .catch(error => {
        console.error('Error al obtener los GIFs:',error);
      })
    }
  })
}

getGif()
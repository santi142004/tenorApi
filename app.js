const apiKey = ' AIzaSyDr-hfn4RaXZzUWBfdp5NtiPxOboacEwl0';
const search = document.getElementById('search');

search.addEventListener('keydown', function(event){

  if (event.keyCode == 13) {
    const word=search.value
    console.log(word);
  }
})

const url = `https://tenor.googleapis.com/v2/search?q=${(search)}&key=${apiKey}`;
const gifs1= document.getElementById('trendGif')

function objects(url) {
  fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));  
}

objects(url)


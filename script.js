import characterWrite from "./components/characterWrite.js";

let url = 'https://rickandmortyapi.com/api/character';
let bodyText = document.getElementById('body-text');
let prev = document.getElementById('previous');
let next = document.getElementById('next');

window.renderizar = function(url){fetch(url).then(function(response){
    return response.json();
}).then(function(responseBody){
    bodyText.innerHTML = '';
    let info = responseBody.results;
    let pages = responseBody.info;

    const arrayText = info.map((character) => characterWrite(character))
    bodyText.innerHTML += arrayText.join('');

    prev.onclick = function() {renderizar(pages.prev)};
    next.onclick = function() {renderizar(pages.next)};
})
}

renderizar(url);
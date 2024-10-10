import characterWrite from "./components/characterWrite.js";
import { nextPage, previousPage } from "./components/pages.js";

let bodyText = document.getElementById('body-text');
let header = document.getElementById('header');
let url = 'https://rickandmortyapi.com/api/character';

window.renderizar = function(url){fetch(url).then(function(response){
    return response.json();
}).then(function(responseBody){
    bodyText.innerHTML = '';
    let info = responseBody.results;
    let pages = responseBody.info;

    const arrayText = info.map((character) => characterWrite(character))
    bodyText.innerHTML += arrayText.join('');

    header.innerHTML = `
            <img onclick="renderizar('${pages.prev}')" class="seta" src="./icones/seta-esquerda.png">
            <h1>Rickpedia</h1>
            <img onclick="renderizar('${pages.next}')" class="seta" src="./icones/seta-direita.png">
    `
})
}

renderizar(url);
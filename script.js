import characterWrite from "./components/characterWrite.js";
import { nextPage, previousPage } from "./components/pages.js";

let bodyText = document.getElementById('body-text');
let url = 'https://rickandmortyapi.com/api/character';

const renderizar = (url) => {fetch(url).then(function(response){
    return response.json();
}).then(function(responseBody){
    bodyText.innerHTML = '';
    let info = responseBody.results;
    let pages = responseBody.info;

    const arrayText = info.map((character) => characterWrite(character))
    bodyText.innerHTML += arrayText.join('');
})
}

renderizar(url);
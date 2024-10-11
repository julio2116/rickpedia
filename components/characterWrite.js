export default function characterWrite({image, name, status, species, type, gender, origin: {name: originName}, location: {name: locationName}}) {
    return `
    <div class="card">
        <img class='image' src="${image}">
        <div class="informacao">
            <p class="info"><b>Nome:</b> ${name}</p>
            <p class="info"><b>Status:</b> ${status}</p>
            <p class="info"><b>Especie:</b> ${species}</p>
            <p class="info"><b>Tipo:</b> ${type}</p>
            <p class="info"><b>Gênero:</b> ${gender}</p>
            <p class="info"><b>Origem:</b> ${originName}</p>
            <p class="info"><b>Visto por último:</b> ${locationName}</p>
        </div>
    </div>
    `
}
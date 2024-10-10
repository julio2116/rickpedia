export default function characterWrite(props) {
    return `
    <div class="card">
        <img class='image' src="${props.image}">
        <div class="informacao">
            <p class="info"><b>Nome:</b> ${props.name}</p>
            <p class="info"><b>Status:</b> ${props.status}</p>
            <p class="info"><b>Especie:</b> ${props.species}</p>
            <p class="info"><b>Status</b>: ${props.status}</p>
            <p class="info"><b>Tipo:</b> ${props.type}</p>
            <p class="info"><b>Gênero:</b> ${props.gender}</p>
            <p class="info"><b>Origem:</b> ${props.origin.name}</p>
            <p class="info"><b>Visto em:</b> ${props.location.name}</p>
        </div>
    </div>
    `
}
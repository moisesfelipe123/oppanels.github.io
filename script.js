const busqueda = document.getElementById("busqueda");
const resultados = document.getElementById("resultados");

let paneles = [];

fetch("paneles.json")
    .then(response => response.json())
    .then(data => {
        paneles = data;
        mostrarPaneles(paneles);
    });

function mostrarPaneles(lista) {

    resultados.innerHTML = "";

    lista.forEach(panel => {

        resultados.innerHTML += `
            <div class="panel">
                <h3>${panel.nombre}</h3>
                <img src="${panel.imagen}" alt="${panel.nombre}">
            </div>
        `;
    });
}

busqueda.addEventListener("input", () => {

    const texto = busqueda.value.toLowerCase();

    const filtrados = paneles.filter(panel => {

        const coincideNombre =
            panel.nombre.toLowerCase().includes(texto);

        const coincideTag =
            panel.tags.some(tag =>
                tag.toLowerCase().includes(texto)
            );

        return coincideNombre || coincideTag;
    });

    mostrarPaneles(filtrados);
});
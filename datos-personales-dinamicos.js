const datosPersonales = [
    {
        icono: 'fa-solid fa-user',
        tituloInformacion:"Nombre y Apellido:",
        informacion:"Dardo Ruben Ledesma"
    },
    {
        icono: 'fa-solid fa-envelope',
        tituloInformacion:"Email:",
        informacion:"ruben.d.ledesma@gmail.com"
    },
    {
        icono: 'fa-solid fa-mobile',
        tituloInformacion:"Telefono:",
        informacion:"3794803570"
    },
    {
        icono: 'fa-solid fa-location-dot',
        tituloInformacion:"Provincia:",
        informacion:"Corrientes Capital"
    }
]

const renderizarInfo = datosPersonales =>{
let listaSobreMi = document.querySelector(".lista-sobre-mi");
datosPersonales.forEach(dato => {
    listaSobreMi.innerHTML += `<li class="estilado-texto-sobre-mi"> 
                                    <i class="${dato.icono}"></i>
                                    <span> ${dato.tituloInformacion}</span>
                                    <span>${dato.informacion}</span>
                                </li>`
});
}

renderizarInfo(datosPersonales)
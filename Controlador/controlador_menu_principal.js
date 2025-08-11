const tarjetas = [
    { titulo: "Producto A", precio: "$15" },
    { titulo: "Producto B", precio: "$25" }
];

function agregar_corazon() {
    console.log("Corazón agregado");
    const name = document.getElementById("ciudad-corazon").value;
    console.log('Esto es el valor de name:', name);
    
};

function mostrar_tarjetas() {
    const contenerdor_de_tarjetas = document.getElementById("lista-corazones");


    
    tarjetas.forEach(item => {
        
        const tarjeta = document.createElement("div");

        //const imagen = document.createElement("img");
        
        const titulo = document.createElement("h3");

        const precio = document.createElement("p");

        titulo.textContent = item.titulo;
        precio.textContent = item.precio;

        //tarjeta.appendChild(imagen);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(precio);
        
        contenerdor_de_tarjetas.appendChild(tarjeta);
    })
    

    window.onload = function() {
        mostrar_tarjetas();
    };
}
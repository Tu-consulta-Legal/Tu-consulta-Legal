document.getElementById("consultaForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue

    let nombre = document.getElementById("nombre").value;
    let consulta = document.getElementById("consulta").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;

    let datos = {
        nombre: nombre,
        consulta: consulta,
        email: email,
        telefono: telefono
    };

    fetch("https://formspree.io/f/xeoekpgy", { // Tu URL de Formspree
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    })
    .then(response => {
        if (response.ok) {
            document.getElementById("mensaje").textContent = "Consulta enviada correctamente";
            document.getElementById("mensaje").style.color = "green";
            document.getElementById("consultaForm").reset();
        } else {
            throw new Error("Error al enviar la consulta");
        }
    })
    .catch(error => {
        document.getElementById("mensaje").textContent = "Hubo un error al enviar la consulta";
        document.getElementById("mensaje").style.color = "red";
    });
});

const frecuenciaNumeros = {};

function contarNumeros() {
    const numeroInput = document.getElementById("numeroInput");
    const numero = numeroInput.value.toLowerCase(); // Convertir a minúsculas para manejar "stop" o "STOP"

    if (numero === "s" || numero === "S") {
        mostrarResultados();
        return;
    }

    // Intentar convertir el valor ingresado a un número entero
    const numeroEntero = parseInt(numero);
    if (!isNaN(numeroEntero)) {
        if (numeroEntero in frecuenciaNumeros) {
            frecuenciaNumeros[numeroEntero] += 1;
        } else {
            frecuenciaNumeros[numeroEntero] = 1;
        }
    }

    numeroInput.value = ""; // Limpiar el campo de entrada
}

function mostrarResultados() {
    const resultadoElement = document.getElementById("resultado");

    // Obtener el número con mayor probabilidad de salir
    const numeroMayorProbabilidad = encontrarNumeroMayorProbabilidad(frecuenciaNumeros);

    resultadoElement.innerHTML = `<h2>El número con mayor probabilidad de salir es:</h2><p>${numeroMayorProbabilidad}</p>`;
}

function encontrarNumeroMayorProbabilidad(frecuenciaNumeros) {
    let numeroMayorProbabilidad = null;
    let frecuenciaMayor = -1;

    for (const numero in frecuenciaNumeros) {
        if (frecuenciaNumeros.hasOwnProperty(numero)) {
            const frecuencia = frecuenciaNumeros[numero];
            
            if (frecuencia > frecuenciaMayor) {
                frecuenciaMayor = frecuencia;
                numeroMayorProbabilidad = numero;
            }
        }
    }

    return numeroMayorProbabilidad;
}

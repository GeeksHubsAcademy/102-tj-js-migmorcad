function numPrimo(input) {
    let resultado = [];

    const esPrimo = (numero) => {
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) return false;
        }
        return numero;
    }

    for (let i = 2; i <= input; i++) {
        if (esPrimo(i)) {
            resultado.push(i);
        }
    }

    if (input == 1) {
        resultado = -1;
    }

    return resultado;
}

module.exports = numPrimo;
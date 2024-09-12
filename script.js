//variaveis
let nome = 'Antonio Sérgio';
const footer = document.getElementById('containerFooter');
const criador = document.createElement('p');

// Template Literals
criador.textContent = `Criado por ${nome}`;
footer.appendChild(criador);

// Arrow Function
const calcular = () => {
    // desestruturação
    const [peso, altura] = [document.getElementById('peso').value, document.getElementById('altura').value / 100];

    if (peso && altura) {
        // operador ternario
        const IMC = (peso / (altura ** 2)).toFixed(2);
        document.getElementById('resultado').innerText = IMC;

        let mensagem;
        mensagem = IMC < 18.5 ? 'Abaixo do peso' : 
                   IMC < 24.9 ? 'Peso normal' : 
                   IMC < 29.9 ? 'Sobrepeso' : 'Obesidade';
        document.getElementById('textoResultado').innerText = mensagem;
    } else {
        alert('Por favor, preencha os campos corretamente!');
    }
};

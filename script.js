let intervalo;

const button = document.getElementById("Calcular");

button.addEventListener("click", () => {
   
    if (intervalo) {
        clearInterval(intervalo);
    }

    const dataEscolhida = new Date(document.getElementById("data-alvo").value); 
    intervalo = setInterval(() => {
        const dataAtual = new Date(); 
        const diferenca = dataEscolhida - dataAtual; 

        if (diferenca <= 0) {
            clearInterval(intervalo); 
            document.getElementById("resultado").innerText = "A data chegou!";
        } else {
            const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

            
            document.getElementById("resultado").innerText = `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos!`;
        }
    }, 1000); 
});

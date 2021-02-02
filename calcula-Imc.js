var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    //Pega dados do Paciente
    var pesotd = paciente.querySelector(".info-peso");
    var peso = pesotd.textContent;

    var alturatd = paciente.querySelector(".info-altura");
    var altura = alturatd.textContent;

    var imctd = paciente.querySelector(".info-imc");

    //Calcula Imc

    var imc = calculaImc(peso, altura);


    // Atribui o imc na tabela
    
    imctd.textContent = imc;

}

function calculaImc(peso, altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}





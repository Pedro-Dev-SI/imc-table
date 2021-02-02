var botaoAdicionar = document.querySelector(".add-btn");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault(event);

    var form = document.querySelector(".add-paciente");

    //Extraindo dados do Form
    var paciente = obtemDadosForm(form);
    //------------------------

    //Criando Tr e Td//
    var pacienteTr = criaTr(paciente);
    //------------------------

    //Mostrar na tabela
    var tabela = document.querySelector(".tabela-pessoas");
    tabela.appendChild(pacienteTr);
    //------------------------

    form.reset();
    
})

function obtemDadosForm(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function criaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function criaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}
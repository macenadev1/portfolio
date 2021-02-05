function Imc()
{
    var pacientes = document.querySelectorAll(".paciente");

    for(i = 0; i < pacientes.length ; i++){
        var paciente = pacientes[i];

        
        informacoesTabela = buscaInformacoesTabela(paciente);
        validaInformacoes(informacoesTabela.peso ,informacoesTabela.altura, informacoesTabela.imcPaciente , paciente);

    }
}
Imc();

function calculaImc(peso, altura){
    var imc = 0;
    imc =  peso / (altura* altura);

    return imc.toFixed(2);
}


function validaInformacoes(peso, altura, imcPaciente, paciente){
    var validaAlturaPeso = true;


    if (peso <= 0 || peso > 300)
    {
        validaAlturaPeso = false;
        imcPaciente.textContent = "Peso Inválido";
        paciente.classList.add("pacienteInvalido");
    }
    else if(altura <= 0 || altura >= 3){
        validaAlturaPeso = false;
        imcPaciente.textContent = "Altura Inválido";
        paciente.classList.add("pacienteInvalido");
    }

    if(validaAlturaPeso){
        var imc = calculaImc(peso,altura, paciente, imcPaciente);
        imcPaciente.textContent = imc;
    }

    return validaAlturaPeso;
}

function buscaInformacoesTabela(paciente){
    var informacoesTabela = {
        peso: paciente.querySelector(".info-peso").textContent,
        altura:  paciente.querySelector(".info-altura").textContent,
        imcPaciente: paciente.querySelector(".info-imc")
    }

    return informacoesTabela;
}

function ValidaPeso(peso){
    if(peso >= 0 && peso <= 300){
        return true;
    }
    else{
        return false;
    }
}

function ValidaAltura(altura){
    if(altura >= 0 && altura <= 3){
        return true;
    }
    else{
        return false;
    }
}
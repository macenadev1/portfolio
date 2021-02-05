var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();//previne os Comportamentos padrão do clique do botão sem carregamento de página
    
    var form = document.querySelector("form");//Selecionando o form quando fomos pegar os input só é necessário colocar o name
    var paciente = ObtemInformacoesForm(form);
    var erros = ValidaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    AdicionaPacienteNaTabela(paciente);
    form.reset();

    var mensagensErro = document.querySelector("#mensagensErro");
    mensagensErro.innerHTML = "";
    backgroundExcluir();
    ExcluirPaciente();

});

function AdicionaPacienteNaTabela(paciente){
    var criaTr = MontaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(criaTr);
}   



function ObtemInformacoesForm(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
    }
    
    return paciente;
}

function MontaTr(paciente){

        var pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente");
        
        pacienteTr.appendChild(MontaTd(paciente.nome, "info-nome"));
        pacienteTr.appendChild(MontaTd(paciente.peso, "info-peso"));
        pacienteTr.appendChild(MontaTd(paciente.altura, "info-altura"));
        pacienteTr.appendChild(MontaTd(paciente.gordura, "info-gordura"));
        pacienteTr.appendChild(MontaTd(paciente.imc, "info-imc"));
        pacienteTr.appendChild(criaColunaFechar());

        return pacienteTr;
}

function MontaTd(informacao, classe){
    var td = document.createElement("td");
    td.textContent = informacao;
    td.classList.add(classe);

    return td;
}


function ValidaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("O campo Nome não pode ser em branco.");
    }

    if(!ValidaPeso(paciente.peso)){
        erros.push("Peso é inválido.");
    }

    if(!ValidaAltura(paciente.altura)){
        erros.push("Altura é inválido.");
    }

    if(paciente.gordura.length == 0){
        erros.push("O campo Gordura não pode ser em branco.");
    }

    if(paciente.peso.length == 0){
        erros.push("O campo Peso não pode ser em branco.");
    }

    if(paciente.altura.length == 0){
        erros.push("O campo Altura não pode ser em branco.");
    }

    return erros;
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagensErro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
        li.classList.add("mensagensErro");
    });
}


function criaColunaFechar(){
    var imgExcluir = document.createElement("img");
    imgExcluir.src = "img/btfechar.png";

    var td = document.createElement("td");
    td.classList.add("img-fechar");

    td.appendChild(imgExcluir);

    return td;
}
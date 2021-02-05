var btBuscar = document.querySelector("#buscar-paciente");

btBuscar.addEventListener("click", function(){
    
    var xhr = new XMLHttpRequest();//faz as requisições 
    
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes"); //configurando a requisição

    
    
    xhr.addEventListener("load", function(){//aqui ele pega as informações da api

        if(xhr.status == 200){//ver o status da requisição se deu certo
            var resposta = xhr.responseText; //aqui ele pega o texto "responseText"
            var pacientes = JSON.parse(resposta);  //aqui ele pega as informações do texto e transforma em uma array 
            
            pacientes.forEach(function(paciente){//pegar cada paciente que está no array
                AdicionaPacienteNaTabela(paciente); //adicionar cada paciente que pegamos no array
            });
        }
        else{
            
            var erroAjax = document.querySelector("#erroAjax");
            erroAjax.textContent = "Erro ao buscar os pacientes.";
            var statusErro = document.querySelector("#statusErro");
            statusErro.textContent = "Código do erro : " + xhr.status;
            setTimeout(function(){
                erroAjax.textContent = "";
                statusErro.textContent = "";
            },2000);
        }
        backgroundExcluir();
        ExcluirPaciente();
    });
    xhr.send();//envia a requisição
});
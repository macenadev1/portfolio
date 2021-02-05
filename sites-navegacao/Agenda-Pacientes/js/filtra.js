var campoFiltro = document.querySelector("#filtrarTabela");


campoFiltro.addEventListener("input", function(){

    var pacientes = document.querySelectorAll(".paciente");

    if(campoFiltro.value.length > 0){
        
        pacientes.forEach(function(paciente){

            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expresao = new RegExp(campoFiltro.value,"i");


            if(!expresao.test(nome)){
                paciente.classList.add("invisivel");

            }
            else{
                paciente.classList.remove("invisivel");

            }
        });
    }
    else{
        pacientes.forEach(function(paciente){
            paciente.classList.remove("invisivel");
        });
    }
});
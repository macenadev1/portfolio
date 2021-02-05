function ExcluirPaciente(){
    var imgExcluir = document.querySelectorAll(".img-fechar");
    imgExcluir.forEach(function(paciente){
        
        paciente.addEventListener("click", function(){
            console.log("cliquei");
            paciente.parentNode.classList.add("fadeOut");

            setTimeout(function(){
                paciente.parentNode.remove();
            },500);
        });
    });
};
ExcluirPaciente();

function backgroundExcluir(){
    var imgExcluir = document.querySelectorAll(".img-fechar");

    imgExcluir.forEach(function(img){
        img.addEventListener("mouseover", function(){
            img.classList.add("backgroundExcluir");
        });

        img.addEventListener("mouseout",function(){
            img.classList.remove("backgroundExcluir");
        });
    });
};
backgroundExcluir();

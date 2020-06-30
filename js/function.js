$(function(){
	$(".navegacao a").click(function(e){

		//estou dizendo que o meu menu de navegação vai cortar oq tem efeito
		e.preventDefault();

		//vou pegar a referencia do meu menu de navegação com o $ e depois pegar o atributo dele
		var id = $(this).attr("href"),
		//vou colocar o elemento que mede a distancia do nav aos conteudo (offset)
			medirOtamanho = $(id).offset().top;
			console.log(medirOtamanho);

		//vou animar agora andando no meu html e body da pagina
		$("body, html").animate({
			//quero animar o scroll
			scrollTop: medirOtamanho	
		},800);
	});

	$(".nav2 a").click(function(e){

		//estou dizendo que o meu menu de navegação vai cortar oq tem efeito
		e.preventDefault();

		//vou pegar a referencia do meu menu de navegação com o $ e depois pegar o atributo dele
		var id = $(this).attr("href"),
		//vou colocar o elemento que mede a distancia do nav aos conteudo (offset)
			medirOtamanho = $(id).offset().top;
			console.log(medirOtamanho);
	

		//vou animar agora andando no meu html e body da pagina
		$("body, html").animate({
			//quero animar o scroll
			scrollTop: medirOtamanho	
		},800);
	});

	var avisoElement = document.querySelector("#aviso");
	avisoElement.onclick = function(){
		var avisoElement = document.querySelector(".aviso-contato");
		avisoElement.style.borderColor = "#CCCCCC";
		avisoElement.style.boder = "2px";
		avisoElement.style.backgroundColor = "#ff3333";
		$(".aviso-contato").fadeOut(5000);
	};
	var avisoElement = document.querySelector("#aviso1");
	avisoElement.onclick = function(){
		var avisoElement = document.querySelector(".aviso-contato");
		avisoElement.style.borderColor = "#CCCCCC";
		avisoElement.style.boder = "2px";
		avisoElement.style.backgroundColor = "#ff3333";
		$(".aviso-contato").fadeOut(5000);
	};
	
	//1 - identificar quando o usuario usa o scroll
	//2 - Calcular a distancia entre o topo da página e o scroll
	//3 - Calcular a distancia entre o topo da pagina e o elemento que deseja animar 
	//4 - comparar as duas distancias anteriores
	//5 - Adicionar uma classe com css animation ou transition ao elemento animado
	
	var $projetos = $(".projeto1"),
		animationClass = "projeto1-start";

	function animeScroll(){
		//to pegando o quanto o document(html em sí) percorreu com o scroll
		var documentTop = $(document).scrollTop(); 

		//agora eu quero que meu elemento scroll pega todos meus itens que esta em meu projeto1 com
		// each  do jquery
		$projetos.each(function(){
			//ver a distancia do meu top até o meus projetos
			// this ta fazendo referencia a minha variavel com meus projetos
			var itemTop = $(this).offset().top;

			//agora vou adcionar a classe do css que tem o anime
			//se a altura do meu top/scroll que estou navegando for maior que a do meu item
			// ativa os efeitos
			if(documentTop > itemTop - 400){
				$(this).addClass(animationClass);
			}
			//senão eu quero que remova a class
			else{
				$(this).removeClass(animationClass);
			}
		})

	}
	animeScroll();
	$(document).scroll(function(){
		animeScroll();
	})



}); 
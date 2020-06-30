$(function(){

	/*///////////////AQUI É A FUNÇÃO DO ROLAMENTO SUAVE DO MENU ATÉ O OBJETIVO//////////////////////////////*/

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
	

		//vou animar agora andando no meu html e body da pagina
		$("body, html").animate({
			//quero animar o scroll
			scrollTop: medirOtamanho	
		},800);
	});
	/* *****************************FINALIZADO O SCROLL SUAVE************************************ */
	
	/* /////////////////////AQUI, ANIMANDO A CHEGADA DOS PROJETOS SUAVE COM O SCROLL/////////////////// */
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
			if(documentTop > itemTop - 430){
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
	/* *******************************FINALIZADO ANIMAÇÃO DO PROJETO COM SCROLL****************** */ 

	/* ///////////////////AQUI É A FUNÇÃO DO ALERTA QUANDO É CLICADO NO CONATO //////////////////// */
	function animeContato(){
		var aviso = $(".aviso-contato"),
		animarAviso = "aviso-start";
		$("#aviso").click(function(){
			$(aviso).addClass(animarAviso);
			//$(".aviso-start").fadeIn();
			//$(aviso).removeClass(animarAviso);
			setTimeout(function(){$(aviso).removeClass(animarAviso);},5000);
		});	
	};
	animeContato();
	
	//sidebar celular
	function animeContato1(){
		var aviso = $(".aviso-contato"),
		animarAviso = "aviso-start";
		$("#aviso1").click(function(){
			$(aviso).addClass(animarAviso);
			//$(".aviso-start").fadeIn();
			//$(aviso).removeClass(animarAviso);
			setTimeout(function(){$(aviso).removeClass(animarAviso);},5000);
		});	
	};
	animeContato1();
	/* **********************FINALIZADO A FUNÇÃO ALERTA CONTATO************************** */ 

}); 
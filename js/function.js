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
});
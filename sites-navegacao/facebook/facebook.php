<!DOCTYPE html>
<html>
<head>
	<title>Login Facebook</title>
	<link rel="stylesheet" type="text/css" href="facebook.css">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=1.0">
	<meta name="author" content="Thiago Macena">
	<meta name="keywords" content="Palavra-chave, separadas, por , virgula.">
	<meta name="description" content="Cópia tela login, fins academicos">
	<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet">
</head>
<body>
	<header>
		<div class="center">
			<div class="logo">
				<h2>Facebook</h2>
			</div><!--logo-->
			<form method="post" class="form-login">
				<div class="form-element">
					<p>E-mail ou telefone:</p>
					<input type="email" name="email">
				</div><!--form-element-->
				<div class="form-element">
					<p>Senha:</p>
					<input type="password" name="senha">
				</div><!--form-element-->
				<div class="form-element">
					<input type="submit" value="Entrar" name="acao">
				</div><!--form-element-->
			</form><!--form-login-->
			<div class="clear"></div>
		</div><!--center-->
	</header>

	<section class="main">
		<div class="center">
			<div class="img-pessoas">
				<img src="img.png">
			</div><!--img-pessoas-->

			<div class="abrir-conta">
				<h2>Abra uma conta</h2>
				<h3>É rápido e fácil.</h3>

				<form class="criar-conta">
					<div class="w50">
						<input type="text" name="" placeholder="Nome">
					</div><!--w50-->

					<div class="w50">
						<input type="text" name="" placeholder="Sobrenome">
					</div><!--w50-->

					<div class="w100">
						<input type="email" name="" placeholder="Celular ou email">
					</div><!--w100-->

					<div class="w100">
						<input type="password" name="" placeholder="Nova senha">
					</div><!--w100-->

					<div class="w100">
						<h4>Data de nascimento</h4>
						<select name="nascimento-dia" class="nascimento">
							<option value="1">22</option>
						</select>
						<select name="nascimento-mes" class="nascimento">
							
							<option value="1">Abril</option>
						</select>

						<select name="nascimento-ano" class="nascimento">
							<option value="1">1998</option>
						</select>
					</div><!--w100-->
					<div class="clear"></div>
					<div class="w100">
						<input type="submit" name="" value="Cadastre-se">
					</div><!--w100-->
				</form><!--create-account-->
			</div><!--abrir-conta-->




			<div class="clear"></div>
		</div><!--center-->
	</section><!--main-->

</body>
</html>
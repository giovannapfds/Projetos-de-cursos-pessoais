<html>

<head>
    <title>
        Imersão Dev - Aula 05
    </title>
    <  link    rel  =  "stylesheet"  href  =  "style.css"  > 
    < script >
    function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector('#filme')
  var filmeFavorito = campoFilmeFavorito.value
  if (filmeFavorito.endsWith('.jpg')) {
    listarFilmesNaTela(filmeFavorito)
  } else{
    alert("Imagen iinválida")
  }
  campoFilmeFavorito.value = ""
}

function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementofilmeFavorito = "<img src=" + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementofilmeFavorito
} 
    </ script>
</head>

<body>
    <div class="container">
        <h1 class="page-title">
            Aluraflix
        </h1>
        <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-aluraflix.svg" class="page-logo"
            alt="">
        <p class="page-subtitle">
            Qual seu filme favorito?
        </p>
        <div class="form-wrapper">
            <input type="text" id="filme" name="filme" placeholder="Insira endereço de imagem">
            <button onClick="adicionarFilme()">Adicionar Filme</button>
        </div>
    </div>
    <div id="listaFilmes"></div>
    <a href="https://alura.com.br/" target="_blank">
        <img src="https://www.alura.com.br/assets/img/home/alura-logo.svg" alt="" class="alura-logo">
    </a>
</body>

</html>

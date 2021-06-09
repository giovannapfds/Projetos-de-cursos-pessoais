<html>

<head>
    <title>
        Imersão Dev - Aula 03
    </title>
    <link    rel  =  "stylesheet"  href  =  "style.css"  > 
    <script>
    var numeroSecreto = parseInt (Math.random() * 10)
var tentativas = 3

while (tentativas > 0){
    var chute = parseInt(prompt("Digite um numero entre 0 e 10"))

    if (numeroSecreto == chute) {
     alert("Acertou")
      break
    }else if (chute > numeroSecreto) {
    alert("O numero secreto é menor")
      tentativas = tentativas - 1
    }else if (chute < numeroSecreto){
      alert("O numero secreto é maior")
      tentativas = tentativas - 1
    }
    else{
      console.log("Errou. O número secreto era "  +  numeroSecreto)
    }
}
if (chute != numeroSecreto) {
  alert("Suas tentativas acabaram. O numero secreto era " +numeroSecreto)
}
    </script>
</head>

<body>
    <div class="container">
        <h1 class="page-title">
            Mentalista
        </h1>
        <p class="page-subtitle">
            Digite um número de 0 a 10
        </p>
        <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-mentalista.svg" class="page-logo"
            alt="">
    </div>
    <a href="https://alura.com.br/" target="_blank">
        <img src="https://www.alura.com.br/assets/img/home/alura-logo.svg" alt="" class="alura-logo">
    </a>
</body>

</html>
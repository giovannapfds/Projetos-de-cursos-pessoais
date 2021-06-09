<html>
<head>
    <title>
        Imersão Dev - Aula 02
    </title>
    < link   rel = " stylesheet " href = " style.css " > 
    <script>
    var primeiroValor = prompt("Digite o primeiro valor: ")
var primeiroValor = parseInt(primeiroValor)
var segundoValor = prompt("Digite o segundo valor: ")
var segundoValor = parseInt(segundoValor)


var operação = prompt("Digite 1 para fazer uma multiplicação, 2 para divisão, 3 para soma e 4 para subtração: ")

if (operação == 1) {
  var rsultado = primeiroValor * segundoValor
  document.write("<h2>" + primeiroValor + " X " + segundoValor +  "=" + rsultado + "</h2")
}else if (operação == 2) {
  var rsultado = primeiroValor / segundoValor
  document.write("<h2>" + primeiroValor + " / " + segundoValor +  "=" + rsultado + "</h2")
}else if (operação == 3) {
  var rsultado = primeiroValor + segundoValor
  document.write("<h2>" + primeiroValor + " + " + segundoValor +  "=" + rsultado + "</h2")
}else if (operação == 4) {
  var rsultado = primeiroValor - segundoValor
  document.write("<h2>" + primeiroValor + " - " + segundoValor +  "=" + rsultado + "</h2")
}
else {
  document.write("<h2>Opção invalida</h2>")
}

    </script>
</head>

<body>
    <div class="container">
        <h1 class="page-title">
            Calculadora
        </h1>
        <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-calculadora.svg" class="page-logo"
            alt="">
        <div class="calculadora">
        </div>
    </div>
    <a href="https://alura.com.br/" target="_blank">
        <img src="https://www.alura.com.br/assets/img/home/alura-logo.svg" alt="" class="alura-logo">
    </a>
    <h2></h2>
</body>

</html>
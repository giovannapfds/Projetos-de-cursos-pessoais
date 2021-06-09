<html>
  <head>
    <title>
      Imersão Dev - Aula 01
    </title>
    <link rel="stylesheet"  href="style.css"> 
    <script>
        var valorEmDolarTexto = prompt ("qual o valor em dolar que você quer converter?")
        var valorEmDolarNumero = parseFloat(valorEmDolarTexto)
        var valorEmReal = valorEmDolarNumero * 5.50
        var valorEmRealDecimal = valorEmReal . toFixed(2)
        alert(valorEmReal)
    </script>
  </head>
  <body>
    <div class="container">
      <h1 class="page-title">
        Conversor de moedas
      </h1>
      <p class="page-subtitle">
        Descubra os valores em dolar U$
      </p>
      <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-conversor-de-moedas.svg" class="page-logo" alt="">
    </div>
      <a href="https://alura.com.br/" target="_blank">
        <img src="https://www.alura.com.br/assets/img/home/alura-logo.svg" alt="" class="alura-logo">
        </a>
  </body>
</html>
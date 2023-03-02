function CalcularIMC() {

    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
  
    const resultado = peso / (altura * altura);
  
    if (!resultado) {
      document.getElementById(
        "resultado"
      ).innerHTML = `<h2>Erro ao calcular IMC<h2>`;
    } else {
      document.getElementById(
        "resultado"
      ).innerHTML = `<h2>Seu IMC é ${resultado.toFixed(2)}<h2>`;
    }
  
    let rows = [...document.querySelectorAll("tr")];
    //Para cada linha da tabela
    rows.forEach((item) => {
      item.style.backgroundColor = "white"; // Restaura a cor de fundo
    });
  
    
    if (resultado < 18.5) {
      document.querySelector(".magreza").style.backgroundColor =
        "#F9BF8F";
    } else if (resultado >= 18.5 && resultado <= 24.9) {
      document.querySelector(".normal").style.backgroundColor =
        "#00AF50";
    } else if (resultado >= 25.0 && resultado <= 29.9) {
      document.querySelector(".sobrepeso").style.backgroundColor =
        "#F9BF8F";
    } else if (resultado >= 30.0 && resultado <= 39.9) {
      document.querySelector(".obesidade").style.backgroundColor =
        "#EA3B43";
    } else if (resultado >= 40.0) {
      document.querySelector(".obesidadegrave").style.backgroundColor =
        "#FE0000";
    }
  }
  
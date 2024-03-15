/*about2.hmtl - segunda questão*/

function showResponse2() {
    var numero = parseInt(document.getElementById('numero').value);
    var fibonacci = [0, 1];
    var i = 1;
  
    while (fibonacci[i] <= numero) {
        fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
        i++;
    }
  
    var resultado = document.getElementById('resultado');
    if (fibonacci.includes (numero)) {
        resultado.textContent = "O número " + numero + " pertence à sequência de Fibonacci.";
    } else {
        resultado.textContent = "O número " + numero + " não pertence à sequência de Fibonacci.";
    }
  }
/*about3.hmtl - terceira questão*/

function showResponse3(alternativa) {
    var resposta;
    switch (alternativa) {
      case 'alternativeA':
        resposta = "Resposta da alternativa A: 9 (adicionando 2 ao último número)";
        break;
      case 'alternativeB':
        resposta = "Resposta da alternativa B: 128 (multiplicando cada número por 2)";
        break;
      case 'alternativeC':
        resposta = "Resposta da alternativa C: 49 (cada número é o quadrado do seu índice na sequência começando de 0)";
        break;
      case 'alternativeD':
        resposta = "Resposta da alternativa D: 100 (cada número é o quadrado do índice multiplicado por 4)";
        break;
      case 'alternativeE':
        resposta = "Resposta da alternativa E: 13 (cada número é a soma dos dois números anteriores)";
        break;
      case 'alternativeF':
        resposta = "Resposta da alternativa F: 20 (cada número é o número anterior somado ao próximo número primo)";
        break;
      default:
        resposta = "Alternativa não encontrada";
    }
    alert(resposta); // Exibe a resposta em um prompt
  }  
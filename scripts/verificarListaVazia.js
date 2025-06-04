//seleciona o elemento da mensagem de lista vazia e o armazena em uma variável
const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

//função que verifica se a lista está vazia e mostra ou esconde a mensagem conforme necessário
function verificarListaVazia(listaDeCompras) {
  const itensDaLista = listaDeCompras.querySelectorAll("li");
  if (itensDaLista.length === 0) {
    mensagemListaVazia.style.display = "block";
  } else {
    mensagemListaVazia.style.display = "none";
  }
}

//exportando a funcao
export default verificarListaVazia;

//importando a função criarItemDaLista do arquivo correspondente
import { criarItemDaLista } from "./scripts/criarItemDaLista.js";

//importando a funcao verificarListaVazia de maneira default
import verificarListaVazia from "./scripts/verificarListaVazia.js";

//declaração de variáveis que acessam elementos do DOM
const botaoAdicionar = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");

//adicionando um evento de clique ao botão "Salvar Item"
botaoAdicionar.addEventListener("click", (evento) => {
  //previne o evento padrao do botao
  evento.preventDefault();
  //executa a função criarItemDaLista e armazena o item retornado na variável itemDaLista
  const itemDaLista = criarItemDaLista();
  //adiciona o itemDaLista como filho da listaDeCompras no DOM
  listaDeCompras.appendChild(itemDaLista);
  //verifica se a lista estava vazia após adicionar o item, para mostrar ou ocultar a mensagem
  verificarListaVazia(listaDeCompras);
});

//verifica ao carregar a pagina se a lista está vazia
verificarListaVazia(listaDeCompras);
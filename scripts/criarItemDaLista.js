//importando por padrao (Default) a funcao gerarDiaDaSemana
import gerarDiaDaSemana from "./gerarDiaDaSemana.js";

//Seleciona o elemento com o ID "input-item" e o armazena na variável inputItem
const inputItem = document.getElementById("input-item");

let contador = 0;

//função responsável por criar e retornar um item completo da lista de compras
export function criarItemDaLista() {
  //verifica se o campo de entrada está vazio e exibe um alerta
  if (inputItem.value === "") {
    alert("Por favor, insira um item!");
    return;
  }

  //cria os elementos da estrutura da lista com as classes para aplicar os estilos do CSS
  const itemDaLista = document.createElement("li");
  const containerItemDaLista = document.createElement("div");
  //adiciona a classe ao container para aplicar os estilos definidos no CSS
  containerItemDaLista.classList.add("lista-item-container");
  const inputCheckbox = document.createElement("input");
  inputCheckbox.type = "checkbox";
  inputCheckbox.id = "checkbox-" + contador++;
  const nomeItem = document.createElement("p");
  nomeItem.innerText = inputItem.value;

  //adiciona um listener ao checkbox que risca o item quando marcado
  inputCheckbox.addEventListener("click", function () {
    if (inputCheckbox.checked) {
      nomeItem.style.textDecoration = "line-through";
    } else {
      //garante que o usuario consiga desfazer sua acao
      nomeItem.style.textDecoration = "none";
    }
  });

  //insere os elementos dentro de seus elementos pai para montar a estrutura
  containerItemDaLista.appendChild(inputCheckbox);
  containerItemDaLista.appendChild(nomeItem);
  itemDaLista.appendChild(containerItemDaLista);

  //variavel que recebe o valor da funcao que gera dia/data/hora (criada no arquivo gerarDiaDaSemana e modularizada)
  const dataCompleta = gerarDiaDaSemana();

  const itemData = document.createElement("p");
  //adiciona a classe ao parágrafo para aplicar os estilos de data
  itemData.classList.add("texto-data");
  //define o conteúdo de texto do elemento com a data formatada
  itemData.innerText = dataCompleta;

  //insere a data como filha do item da lista
  itemDaLista.appendChild(itemData);

  //retorna o item completo criado para ser adicionado à lista
  return itemDaLista;
}

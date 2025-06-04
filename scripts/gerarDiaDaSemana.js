//funcao que gera dia/data/hora
function gerarDiaDaSemana() {
  //adicionando dia/data/hora aos itens da lista
  const diaDaSemana = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
  });
  const data = new Date().toLocaleDateString("pt-BR");
  const hora = new Date().toLocaleTimeString("pt-BR", {
    hour: "numeric",
    minute: "numeric",
  });

  const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;

  return dataCompleta;
}

//exportando por padrao (Default) a funcao gerarDiaDaSemana
export default gerarDiaDaSemana;
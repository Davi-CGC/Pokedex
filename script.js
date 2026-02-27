const pesquisa = document.getElementById("pesquisa")
const button = document.getElementById("button")
const divResultado = document.getElementById("resultado")

const cotarAcao = async () => {
  const acao = pesquisa.value 
  const response = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${acao}`)).json()

  const imagem = response.sprites.front_default
  const nome = response.name
  const altura = response.height /10
  const peso = response.weight /10
  const tipo = response.types[0].type.name
  const id = response.id

  divResultado.innerHTML = `<img src="${imagem}">
  <p>ID: ${id}</p>
  <p>Nome: ${nome}</p>
  <p>Tipo: ${tipo}</p>
  <p>Altura: ${altura}m</p>
  <p>Peso: ${peso}Kg</p>`
}

button.addEventListener("click", cotarAcao)

//await = freio para carregar
//fetch = requisição
//getElementById = busca no html

//.json = conversor de promessas em js


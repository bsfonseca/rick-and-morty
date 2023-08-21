const lista = document.getElementById("lista");

function atualizarLista(personagens) {
  for (let item of personagens) {
    const li = document.createElement("div");
    li.innerHTML = `Personagem ${item.id}: ${item.name} - ${item.species}`;

    const imagem = document.createElement("img");
    imagem.setAttribute("height", "100");
    imagem.setAttribute("src", item.image);
    imagem.classList.add("img-personagem");

    li.appendChild(imagem);
    lista.appendChild(li);
  }
}

function listarPersonagens() {
  axios
    .get("https://rickandmortyapi.com/api/character")
    .then((result) => {
      atualizarLista(result.data.results);
    })
    .catch((erro) => {
      console.log(erro);
    });
}

listarPersonagens();

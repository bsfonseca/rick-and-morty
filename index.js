const lista = document.getElementById("lista");
let page = 1;

function atualizarLista(personagens) {
  lista.innerHTML = "";
  for (let item of personagens) {
    const divPersonagem = document.createElement("div");
    divPersonagem.classList.add("personagem-card");

    const imagem = document.createElement("div");
    imagem.classList.add("personagem-imagem");

    const img = document.createElement("img");
    img.setAttribute("src", item.image);
    imagem.appendChild(img);

    const info = document.createElement("div");
    info.classList.add("personagem-info");

    const nome = document.createElement("h2");
    nome.textContent = item.name;

    const especie = document.createElement("p");
    especie.textContent = `Espécie: ${item.species}`;

    const status = document.createElement("p");
    status.textContent = `Status: ${item.status}`;

    info.appendChild(nome);
    info.appendChild(especie);
    info.appendChild(status);

    divPersonagem.appendChild(imagem);
    divPersonagem.appendChild(info);

    lista.appendChild(divPersonagem);
  }
}

function listarPersonagens(page) {
  axios
    .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then((result) => {
      atualizarLista(result.data.results);
    })
    .catch((erro) => {
      console.log(erro);
    });
}

document.getElementById("bt-proximo").addEventListener("click", () => {
  page++;
  listarPersonagens(page);
});

document.getElementById("bt-anterior").addEventListener("click", () => {
  if (page > 1) {
    page--;
    listarPersonagens(page);
  }
});

listarPersonagens(page);

document.getElementById("btn-busca").addEventListener("click", () => {
  const nomePersonagem = document.getElementById("campo-busca").value;
  if (nomePersonagem.trim() !== "") {
    buscarPersonagem(nomePersonagem);
  }
});

function buscarPersonagem(nome) {
  axios
    .get(`https://rickandmortyapi.com/api/character/?name=${nome}`)
    .then((result) => {
      atualizarLista(result.data.results);
    })
    .catch((erro) => {
      console.log(erro);
    });
}

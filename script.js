let botaoAdicionarAfazer = document.getElementById("adicionarAfazer");
let conteinerAfazeres = document.getElementById("conteinerAfazeres");
let input = document.getElementById("input");
let afazeres = [];


function loadFromStorage() {
  let afazeresString = localStorage.getItem("afazeres");
  if (afazeresString) {
    let tarefas = JSON.parse(afazeresString);
    for (let tarefa of tarefas) {
      let paragrafo = document.createElement("p");
      paragrafo.classList.add("style-paragrafo");
      paragrafo.innerText = tarefa.texto;
      if (tarefa.cruzado) {
        paragrafo.style.textDecoration = "line-through";
      }
      conteinerAfazeres.appendChild(paragrafo);
      afazeres.push(tarefa);
      paragrafo.addEventListener("click", function () {
        if (paragrafo.style.textDecoration === "line-through") {
          paragrafo.style.textDecoration = "none";
          afazeres.find(
            (el) => el.texto === paragrafo.innerText
          ).cruzado = false;
        } else {
          paragrafo.style.textDecoration = "line-through";
          afazeres.find(
            (el) => el.texto === paragrafo.innerText
          ).cruzado = true;
        }
        salvar();
      });
      paragrafo.addEventListener("dblclick", function () {
        conteinerAfazeres.removeChild(paragrafo);
        afazeres.splice(
          afazeres.findIndex((el) => el.texto === paragrafo.innerText),
          1
        );
        salvar();
      });
    }
  }
}

loadFromStorage();

botaoAdicionarAfazer.addEventListener("click", addTarefa);

input.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    addTarefa();
  }
});

function addTarefa() {
  if (input.value === "") {
    return console.error("No text!");
  }
  let paragrafo = document.createElement("p");
  paragrafo.classList.add("style-paragrafo");
  paragrafo.innerText = input.value;
  conteinerAfazeres.appendChild(paragrafo);
  afazeres.push({ texto: input.value, cruzado: false });
  salvar();
  input.value = "";
  paragrafo.addEventListener("click", function () {
    if (paragrafo.style.textDecoration === "line-through") {
      paragrafo.style.textDecoration = "none";
      afazeres.find((el) => el.texto === paragrafo.innerText).cruzado = false;
    } else {
      paragrafo.style.textDecoration = "line-through";
      afazeres.find((el) => el.texto === paragrafo.innerText).cruzado = true;
    }
    salvar();
  });
  paragrafo.addEventListener("dblclick", function () {
    conteinerAfazeres.removeChild(paragrafo);
    afazeres.find((el) => el.texto === paragrafo.innerText).cruzado = true;
    afazeres.splice(
      afazeres.findIndex((el) => el.texto === paragrafo.innerText),
      1
    );
    salvar();
  });
}

function salvar() {
  localStorage.setItem("afazeres", JSON.stringify(afazeres));
}

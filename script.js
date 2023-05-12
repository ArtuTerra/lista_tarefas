let botaoAdicionarAfazer = document.getElementById("adicionarAfazer");

let conteinerAfazeres = document.getElementById("conteinerAfazeres");

let input = document.getElementById("input");

botaoAdicionarAfazer.addEventListener("click", function () {
  var paragrafo = document.createElement("p");
  paragrafo.classList.add("style-paragrafo");
  paragrafo.innerText = input.value;
  conteinerAfazeres.appendChild(paragrafo);
  input.value = "";
  paragrafo.addEventListener("click", function () {
    if (paragrafo.style.textDecoration === "line-through") {
      paragrafo.style.textDecoration = "none";
    } else {
      paragrafo.style.textDecoration = "line-through";
    }
  });
  paragrafo.addEventListener("dblclick", function () {
    conteinerAfazeres.removeChild(paragrafo);
  });
});

input.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    var paragrafo = document.createElement("p");
    paragrafo.classList.add("style-paragrafo");
    paragrafo.innerText = input.value;
    conteinerAfazeres.appendChild(paragrafo);
    input.value = "";
    paragrafo.addEventListener("click", function () {
      if (paragrafo.style.textDecoration === "line-through") {
        paragrafo.style.textDecoration = "none";
      } else {
        paragrafo.style.textDecoration = "line-through";
      }
    });
    paragrafo.addEventListener("dblclick", function () {
      conteinerAfazeres.removeChild(paragrafo);
    });
  }
});

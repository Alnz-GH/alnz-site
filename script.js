const carrossel = document.getElementById("carrossel");

const proximo = document.getElementById("proximo");

const anterior = document.getElementById("anterior");

proximo.addEventListener("click", () => {
  const card = carrossel.querySelector(".oferta-card");

  const largura = card.offsetWidth + 12;

  carrossel.scrollBy({
    left: largura,

    behavior: "smooth",
  });
});

anterior.addEventListener("click", () => {
  const card = carrossel.querySelector(".oferta-card");

  const largura = card.offsetWidth + 12;

  carrossel.scrollBy({
    left: -largura,

    behavior: "smooth",
  });
});

const card = document.querySelector(".card");

for (let i = 0; i < 10; i++) {
  let newCard = card.cloneNode(true);

  document.querySelector('main').appendChild(newCard);
}

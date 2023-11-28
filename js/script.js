const myLibrary = [];
const ventanaEmergente = document.querySelector('.ventana-emergente');
const addBookForm = document.querySelector('.ventana-emergente > form');
const newBookButton = document.getElementById("new-button");
const aceptarButton = addBookForm.querySelector(".emergente.aceptar");
const cancelarButton = addBookForm.querySelector(".emergente.cancelar");
const cardContainer = document.querySelector("main");
const cards = document.querySelectorAll(".card");
const cardTemplate = document.querySelector(".card-template").cloneNode(true);

aceptarButton.addEventListener('click', addBookToLibrary);

cards.forEach(card => {
  let deleteButton = card.querySelector(".delete-button");
  deleteButton.addEventListener('click', () => { card.remove() });
});

cancelarButton.addEventListener('click', () => {
  cardContainer.classList.remove("blur");
  ventanaEmergente.dataset.visible = "false";
});

function Book(title, autor, pages, read) {
  this.title = title;
  this.autor = autor;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const title = document.getElementById("book-title").value;
  const autor = document.getElementById("book-autor").value;
  const pages = document.getElementById("book-pages").value;
  const read = document.getElementById("book-read").checked;

  const book = new Book(title, autor, pages, read);

  myLibrary.push(book);

  cardContainer.classList.remove("blur");
  ventanaEmergente.dataset.visible = "false";
  actualizarCards();
}

newBookButton.addEventListener("click", mostrarForm);

function mostrarForm() {
  ventanaEmergente.dataset.visible = "true";
  cardContainer.classList.add("blur");
}

function actualizarCards() {
  cardContainer.querySelectorAll(".card:not(.card-template)").forEach((e) => e.remove());
  myLibrary.forEach((book) => {
    const newCard = cardTemplate.cloneNode(true);

    newCard.querySelector(".card-title").textContent = book.title;
    newCard.querySelector(".card-autor").textContent = book.autor;
    newCard.querySelector(".card-pages").textContent = book.pages;
    newCard.querySelector(".card-read").textContent = book.pages ? "Read" : "Not yet";
    newCard.classList.remove("card-template");
    newCard.classList.add("card");

    cardContainer.appendChild(newCard);
  });
}

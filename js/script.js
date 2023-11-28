const myLibrary = [];
const ventanaEmergente = document.querySelector('.ventana-emergente');
const addBookForm = document.querySelector('.ventana-emergente > form');
const newBookButton = document.getElementById("new-button");
const aceptarButton = addBookForm.querySelector(".emergente.aceptar");
const cancelarButton = addBookForm.querySelector(".emergente.cancelar");
const cardContainer = document.querySelector("main");
const cards = document.querySelectorAll(".card");
const cardTemplate = document.querySelector(".card-template").cloneNode(true);
const editCardContainer = document.querySelector('.ventana-emergente.edit-card');


aceptarButton.addEventListener('click', addBookToLibrary);

cards.forEach(card => {
  let deleteButton = card.querySelector(".delete-button");
  deleteButton.addEventListener('click', () => { card.remove() });
});

cancelarButton.addEventListener('click', () => {
  cardContainer.classList.remove("blur");
  ventanaEmergente.dataset.visible = "false";
  clearForm();

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
  clearForm();
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
    newCard.dataset.index = myLibrary.indexOf(book);


    let deleteButton = newCard.querySelector(".delete-button");
    deleteButton.addEventListener('click', () => {
      newCard.remove();
      index = myLibrary.indexOf(book);
      myLibrary.splice(index, 1);
    });

    let index = myLibrary.indexOf(book);
    let editButton = newCard.querySelector(".edit-button");
    editButton.addEventListener('click', () => { editCard(newCard, index) });

    newCard.classList.remove("card-template");
    newCard.classList.add("card");

    cardContainer.appendChild(newCard);
  });
}

let indexEditingNow;
const editAceptar = document.querySelector(".emergente.aceptar.edit");
const editCancel = document.querySelector(".emergente.cancelar.edit");
editCancel.addEventListener("click", () => {
  cardContainer.classList.remove("blur");
  ventanaEmergente.dataset.visible = "false";
  clearForm();
});


function clearForm() {
  let inputs = document.querySelectorAll(".input-form");
  inputs.forEach((e) => {
    if (e.type == "checkbox")
      e.checked = false;
    e.value = "";
  });

}


function editCard(card, index) {
  indexEditingNow = index;
  editCardContainer.dataset.visible = "true";
  cardContainer.classList.add("blur");
  console.log(card);
  editAceptar.addEventListener('click', () => {
    editCardContainer.dataset.visible = "false";
    cardContainer.classList.remove("blur");

    const title = document.getElementById("book-title-edited").value;
    const autor = document.getElementById("book-autor-edited").value;
    const pages = document.getElementById("book-pages-edited").value;
    const read = document.getElementById("book-read-edited").checked;

    card.querySelector(".card-title").textContent = myLibrary[index].title = title;
    card.querySelector(".card-autor").textContent = myLibrary[index].autor = autor;
    card.querySelector(".card-pages").textContent = myLibrary[index].pages = pages;
    card.querySelector(".card-read").textContent = myLibrary[index].read = read ? "Read" : "Not yet";
    clearForm();
  });
}

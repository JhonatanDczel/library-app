const myLibrary = [];
const ventanaEmergente = document.querySelector('.ventana-emergente');
const addBookForm = document.querySelector('.ventana-emergente > form');
const newBookButton = document.getElementById("new-button");
const aceptarButton = addBookForm.querySelector(".emergente.aceptar");
const cancelarButton = addBookForm.querySelector(".emergente.cancelar");

aceptarButton.addEventListener('click', addBookToLibrary);

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
}

newBookButton.addEventListener("click", mostrarForm);

function mostrarForm() {
  ventanaEmergente.dataset.visible = "true";
  document.querySelector("main").classList.add("blur");
}

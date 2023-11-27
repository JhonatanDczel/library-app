const myLibrary = [];

function Book(title, autor, pages, read) {
  this.title = title;
  this.autor = autor;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const title = prompt("Titulo:");
  const autor = prompt("Autor:");
  const pages = prompt("Pages:");
  const read = prompt("Read?:");

  const book = new Book(title, autor, pages, read);

  myLibrary.push(book);
}

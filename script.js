/* 
Beskrivning

I den här övningen så skall du med objekt orienterade principer skapa ett system för ett bibliotek. 

Du skall ha minst 2 klasser i ditt projekt, ett för böcker och en för biblioteket som innehåller böcker.

 

Bok-klassen skall minst innehålla namn på boken, sid antal och författare och status för utlånad eller inte. Vill du lägga till mer så är det såklart ok.

Till boken så skall det även finnas en metod för att skriva ut en presentation eller en bio om boken. 

Tex: “Stifltelsetrilogin är en bok skriven av Isac Asimov och är 634 sidor lång. Boken är just nu inte utlånad.”

Samt en metod för att låna och lämna tillbaks en specifik bok.

 

Till biblioteks-klassen så skall ni förutom en lista på böcker, adress och kontaktuppgifter skapa minst två metoder, en som skriver ut en kontaktsträng. 

Och en som skriver ut hur många böcker som finns på biblioteket, och hur många som är utlånade.

“Vårt bibliotek har 231 böcker, av dessa är 14 utlånade just nu”

 

Bonus nivå!

Öva på att skapa arv genom att skapa en superklass som heter “media” där bok är en underklass och film är en annan. 

Fundera på vilka parameterar kan vara de samma (namn, författare/artist, utlånad osv).

 */
/* import Media from "./media.js";
import Book from "./book.js";
import Movie from "./movie.js";
 */

const bookList = document.querySelector("#bookList");
const movieList = document.querySelector('#movieList');
let mediaId = 0;

class Library {
    constructor (libraryName, address, phoneNum, eMail) {
        this._libraryName = libraryName;
        this._address = address;
        this._phoneNum = phoneNum;
        this._eMail = eMail;
        this._books = [];
        this._movies = [];
    }
    print_books () {
        this._books.forEach(addToBookList)
    }
    print_movies () {
        this._movies.forEach(addToMoviesList)
    }
}

let muiNeLib = new Library ("Mui Ne Library", "69 Nguyen Dinh Chieu", "+8488888888", "kim.Laundry@myspace.com");
//console.log(muiNeLib);



function addToBookList (book) {
    if (book._borrowed === false) {
        bookList.insertAdjacentHTML("afterbegin", "<li>" + `Title: ${book._title} | Author: ${book._author} | Pages: ${book._pages} | Available : Yes` + "</li>" + `<button id="${book._id}">` + "borrow" + "</button>");
        const borrowBtn = document.getElementById(book._id);
        borrowBtn.addEventListener('click', () => {
            book.borrow_media();
/*             location.reload();  add after adding JSON*/
            console.log(muiNeLib._books);
            bookList.innerHTML="";
            muiNeLib.print_books();
        });

    } else {
        bookList.insertAdjacentHTML("afterbegin", "<li>" + `Title: ${book._title} | Author: ${book._author} | Pages: ${book._pages} | Available : No` + "</li>" + `<button id="${book._id}">` + "return" + "</button>");
        const borrowBtn = document.getElementById(book._id);
        borrowBtn.addEventListener('click', () => {
            book.return_media();
/*             location.reload(); add after adding JSON  */
            console.log(muiNeLib._books);
            bookList.innerHTML="";
            muiNeLib.print_books();
        });
    }
}



function addToMoviesList (movie) {
    if (movie._borrowed === false) {
        movieList.insertAdjacentHTML("afterbegin", "<li>" + `Title: ${movie._title} | Director: ${movie._director} | Minutes: ${movie._minutes} | Available : Yes` + "</li>" + `<button id="${movie._id}">` + "borrow" + "</button>");
        const borrowBtn = document.getElementById(movie._id);
        borrowBtn.addEventListener('click', () => {
            movie.borrow_media();
/*             location.reload();  add after adding JSON*/
            console.log(muiNeLib._movies);
            movieList.innerHTML="";
            muiNeLib.print_movies();
        });

    } else {
        movieList.insertAdjacentHTML("afterbegin", "<li>" + `Title: ${movie._title} | Director: ${movie._director} | Minutes: ${movie._minutes} | Available : No` + "</li>" + `<button id="${movie._id}">` + "return" + "</button>");
        const borrowBtn = document.getElementById(movie._id);
        borrowBtn.addEventListener('click', () => {
            movie.return_media();
/*             location.reload(); add after adding JSON  */
            console.log(muiNeLib._movies);
            movieList.innerHTML="";
            muiNeLib.print_movies();
        });
    }
}



class Media {
    constructor(title, creator) {
        this._title = title;
        this._id = mediaId;
        mediaId++;
    }
    borrow_media () {
        this._borrowed = true;
    }
    return_media () {
        this._borrowed = false;
    }
}




class Book extends Media {
    constructor (title, creator, numOfPages) {
        super(title);
        this._author = creator;
        this._pages = numOfPages;
        this._borrowed = false;
    }
    addToLibrary () {
        muiNeLib._books.push(this);
    }
}




const catcherInTheRye = new Book ("Catcher In The Rye","J.D Salinger", 124);
catcherInTheRye.addToLibrary();

console.log(muiNeLib);
//console.log(catcherInTheRye);

class Movie extends Media {
    constructor (title, creator, numOfMinutes) {
        super(title);
        this._director = creator;
        this._minutes = numOfMinutes;
        this._borrowed = false;
    }
    addToLibrary () {
        muiNeLib._movies.push(this);
    }
}

const lordOfTheRings = new Movie ("Lord Of The Rings, The Fellowship Of The Ring","Peter Jackson", 180); 
lordOfTheRings.addToLibrary();
console.log(muiNeLib);

muiNeLib.print_books();
muiNeLib.print_movies();
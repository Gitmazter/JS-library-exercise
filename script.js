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
import Book from "./book.js";
import Movie from "./movie.js";
import {books} from "./books.js";
import {movies} from "./movies.js";


const bookList = document.querySelector("#bookList");
const movieList = document.querySelector('#movieList');
const greeting = document.querySelector('#greeting');
const contact = document.querySelector('#contact');
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
    print_greeting () {
        let numBooksBorrowed = checkBorrowed(this._books);
        let numMoviesBorrowed = checkBorrowed(this._movies);
        //console.log(numBooksBorrowed);
        greeting.innerHTML= `This library has ${muiNeLib._books.length} books and ${numBooksBorrowed} are currently out on loan. </br>
        This library also has ${this._movies.length} movies and ${numMoviesBorrowed} are currently out on loan.`
    }
    print_contact () {
        contact.insertAdjacentHTML("afterbegin", '<ul>' +'<li>' + `DCSVN representative contact information` + '</li>' +  '<li>' + `Address: ${this._address}` + '</li>' + '<li>' + `Phone: ${this._phoneNum}` + '</li>' + '<li>' + `E-Mail: ${this._eMail}` + '</li>'  + '</ul>')
    }
}
function checkBorrowed (media) {
    let num = 0;
    media.forEach(media => {
        if (media._borrowed === true) {
            num++;
        }
    });
    return num;
}


let muiNeLib = new Library ("Mui Ne Library", "69 Nguyen Dinh Chieu", "+8488888888", "kim.ngan34@dcs.vn");

function addToBookList (book) {
    if (book._borrowed === false) {
        bookList.insertAdjacentHTML("afterbegin",'<div class="media_div">' + "<li>" + `Title: ${book._title} | Author: ${book._author} | Pages: ${book._pages} | Available : Yes` + "</li>" + `<button id="${book._id}">` + "borrow" + "</button>" + '</div>');
        const borrowBtn = document.getElementById(book._id);
        borrowBtn.addEventListener('click', () => {
            book.borrow_media();
/*             location.reload();  add after adding JSON*/
            //console.log(muiNeLib._books);
            bookList.innerHTML="";
            muiNeLib.print_books();
            greeting.innerHTML = "";
            muiNeLib.print_greeting();
        });

    } else {
        bookList.insertAdjacentHTML("afterbegin", '<div class="media_div">' + "<li>" + `Title: ${book._title} | Author: ${book._author} | Pages: ${book._pages} | Available : No` + "</li>" + `<button id="${book._id}">` + "return" + "</button>" + '</div>' );
        const borrowBtn = document.getElementById(book._id);
        borrowBtn.addEventListener('click', () => {
            book.return_media();
/*             location.reload(); add after adding JSON  */
            //console.log(muiNeLib._books);
            bookList.innerHTML="";
            muiNeLib.print_books();
            greeting.innerHTML = "";
            muiNeLib.print_greeting();
        });
    }
}

function addToMoviesList (movie) {
    if (movie._borrowed === false) {
        movieList.insertAdjacentHTML("afterbegin", '<div class="media_div">' + "<li>" + `Title: ${movie._title} | Director: ${movie._director} | Minutes: ${movie._minutes} | Available : Yes` + "</li>" + `<button id="${movie._id}">` + "borrow" + "</button>" + '</div>');
        const borrowBtn = document.getElementById(movie._id);
        borrowBtn.addEventListener('click', () => {
            movie.borrow_media();
/*             location.reload();  add after adding JSON*/
            //console.log(muiNeLib._movies);
            movieList.innerHTML="";
            muiNeLib.print_movies();
            greeting.innerHTML = "";
            muiNeLib.print_greeting();
        });

    } else {
        movieList.insertAdjacentHTML("afterbegin", '<div class="media_div">' +"<li>" + `Title: ${movie._title} | Director: ${movie._director} | Minutes: ${movie._minutes} | Available : No` + "</li>" + `<button id="${movie._id}">` + "return" + "</button>" + '</div>');
        const borrowBtn = document.getElementById(movie._id);
        borrowBtn.addEventListener('click', () => {
            movie.return_media();
/*             location.reload(); add after adding JSON  */
            //console.log(muiNeLib._movies);
            movieList.innerHTML="";
            muiNeLib.print_movies();
            greeting.innerHTML = "";
            muiNeLib.print_greeting();
        });
    }
}

/// Create book object
 for (let i = 0; i < books.length; i++) {
    const book = new Book (books[i], books[i+1], books[i+2]);
    muiNeLib._books.push(book);
    i += 2;
} 
console.log(books.length)

/// Create Movie Objects
for (let i = 0; i < movies.length; i++) {
    const movie = new Movie (movies[i], movies[i+1], movies[i+2]);
    muiNeLib._movies.push(movie);
    i+=2;
}

muiNeLib.print_books();
muiNeLib.print_movies();
muiNeLib.print_greeting();
muiNeLib.print_contact();


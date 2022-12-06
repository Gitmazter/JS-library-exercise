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
class Library {
    constructor (libraryName, address, phoneNum, eMail) {
        this._libraryName = libraryName;
        this._address = address;
        this._phoneNum = phoneNum;
        this._eMail = eMail;
        this._books = [];
        this._movies = [];
    }
}
let muiNeLib = new Library ("Mui Ne Library", "69 Nguyen Dinh Chieu", "+8488888888", "kim.Laundry@myspace.com");
//console.log(muiNeLib);

class Media {
    constructor(title, creator) {
        this._title = title;
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
lordOfTheRings.borrow_media();
console.log(muiNeLib);
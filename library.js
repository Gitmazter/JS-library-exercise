export default class Library {
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


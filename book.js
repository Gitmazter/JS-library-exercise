import Media from "./media.js";

export default class Book extends Media {
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
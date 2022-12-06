export default class Book extends Media {
    constructor (numOfPages) {
        super(_name, _borrowed);
        this._pages = numOfPages;
    }
}
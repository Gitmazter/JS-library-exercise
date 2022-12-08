import Media from "./media.js";

export default class Movie extends Media {
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

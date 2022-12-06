export default class Movie extends Media {
    constructor (numOfMinutes) {
        super(_name, _borrowed);
        this._minutes = numOfMinutes;
    }
}
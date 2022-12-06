export default class Media {
    constructor(name) {
        this._name = name;
        this._borrowed = false;
    }
    rent_book () {
        this._borrowed = true;
    }
    return_book () {
        this._borrowed = false;
    }
}
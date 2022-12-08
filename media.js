
let mediaId = 0;
export default class Media {
    constructor(title) {
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
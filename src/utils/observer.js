export default class Observer {
    constructor() {
        this._observer = [];
    }

    addObserver(observer) {
        this._observers.push(observer);
    }

    removeObsrver(observer) {
        this._observers = this._observers.filter((existedObserver) => existedObserver !== observer);
    }

    _notify(event, payload) {
        this._observers.forEach((observer) => observer(event, payload));
    }
}
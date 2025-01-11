export default class ErrorRepository {
    constructor() {
        this.errors = new Map();
        this.addError(1, 'Error1');
        this.addError(2, 'Error2');
    }

    addError(code, message) {
        this.errors.set(code, message);
    }

    translate(code) {
        return this.errors.has(code) ? this.errors.get(code) : 'Unknown error';
    }
};

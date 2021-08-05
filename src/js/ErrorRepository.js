export default class ErrorRepository {
    constructor() {
      this.errStorage = new Map();
    }
  
    translate(code) {
      return this.errStorage.get(code) || 'Unknown error';
    }
}
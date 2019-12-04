module.exports = class Example {
  constructor(index) {
    this.index = index
  }

  set(fieldName, value) {
    switch (fieldName) {
      case 'index':
        this.index = index
        break
      default:
        break
    }
  }
}
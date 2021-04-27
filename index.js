class Formatter {
  static capitalize(string) {
    let capitalized = string[0].toUpperCase() + string.slice(1)
    return capitalized
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }
}
class AuthService {
  static setUserData(user) {
    localStorage.setItem('user', user)
  }

  static getToken(token) {
    return localStorage.getItem('token')
  }

  static hasToken() {
    return !!localStorage.getItem('token')
  }

  static deleteToken() {
    localStorage.removeItem('token')
  }

  static setUserData(user) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  static getUserData() {
    const value = localStorage.getItem('user')
    if (value == null) return null
    return JSON.parse(value)
  }

  static deleteUserData() {
    localStorage.removeItem('user')
  }
}

export { AuthService }

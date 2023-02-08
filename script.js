class Form {

  items = []

  method = 'GET'

  constructor(container, method, action ) {
    this.container = document.querySelector(container)
    this.method = method
    this.action = action
  }

  addItem(item) {
    this.items.push(item)
  }

  render() {
    let formElement = document.createElement('form')
    formElement.setAttribute('method', this.method)
    formElement.setAttribute('action', this.action)

    for (let i in this.items) {
      this.items[i].render(formElement)
    }

    this.container.appendChild(formElement)
  }
}

class input {
  _type = 'text'
  required = false

  constructor(name, label){
    this.name = name
    this.label = label
  }

  get type(){
    return this._type
  }

  set type(t){
    if(['text', 'password', 'email', 'submit'].includes(t)){
      this._type = t
    } else {
      throw new Error(`Input ${t} type doesn't exist.`)
    }
  }

  render(formElement) {
    let el = document.createElement('input')
    el.type = this.type
    el.name = this.name
    el.placeholder = this.label
    el.required = this.required
    formElement.appendChild(el)
  }
}

class Button extends input {
  constructor(label) {
    super('', label)
    this.type = 'submit'
  }

  render(formElement) {
    let el = document.createElement('input')
    el.type = this.type
    el.value = this.label
    formElement.appendChild(el)
  }
}

let form = new Form('.formArea', 'POST', 'https://site.com.br')

let email = new input('email', 'Digite seu e-mail')
email.type = 'email'
email.required = true
form.addItem(email)

let password = new input('password', 'Digite sua senha')
password.type = 'password'
form.addItem(password)

let button = new Button('Enviar')
form.addItem(button)

form.render()




class Counter {
  constructor(initialValue) {
    this.counter = initialValue
  }

  increment() {
    this.counter++
  }

  decrement() {
    this.counter--
  }
}

const counter1 = new Counter(0)
const counter2 = new Counter(10)
const counter3 = new Counter(1000)
const counter4 = new Counter(-50)

counter1.increment()
counter4.decrement()
console.log("counter1", counter1)
console.log("counter2", counter2)
console.log("counter3", counter3)
console.log("counter4", counter4)

class User {
  isUser = true
  isActive = true
  constructor(name, age, email) {
    this.name = name
    this.age = age
    this.email = email
  }

  sendMessage() {
    return "Hi my name is " + this.name
  }

  deleteUser() {
    this.isActive = false
  }

  sendPrivateMessage() {
    if (!this.isAdmin) {
      return "unauthorized"
    }
    return "hello this is the admin"
  }
}

class Admin extends User {
  #isAdmin = true //# means private admin.isAdmin is not accessible and cant change
  constructor(name, age, email) {
    super(name, age, email)
  }

  areYouAdmin() {
    // shows the private property
    return this.#isAdmin
  }
}

const mike = new User("Michele", 25, "michele@gmail.com")
const daniel = new Admin("Daniel", 25, "Daniel@gmail.com")
const milad = new User("Milad", 25, "milad@gmail.com")
const juliana = new User("Juliana", 25, "juliana@gmail.com")

console.log(mike.sendMessage())
console.log(daniel.sendMessage())
console.log(milad.sendMessage())

console.log(mike.isAdmin)
console.log(daniel.areYouAdmin())

console.log(milad.sendPrivateMessage())
console.log(daniel.sendPrivateMessage())

class Animal {
  constructor(name) {
    this.name = name
  }

  greet() {
    return "Hey I'm a " + this.name
  }
}

class Dog extends Animal {
  constructor(name, nickname, breed) {
    super(name)
    this.nickname = nickname
    this.breed = breed
  }
  talk() {
    return this.nickname + " Woofs"
  }
}

class Cat extends Dog {
  constructor(name, nickname, breed) {
    super(name, nickname, breed)
  }
  talk() {
    return this.nickname + " Meows"
  }
}

const tilly = new Cat("Cat", "Tilly", "British Girl")

const monkey = new Animal("Monkey")
const horse = new Animal("Horse")
const honey = new Dog("Dog", "Kenga", "Pomerianian")

// console.log(monkey.greet())
// console.log(horse.greet())
console.log(honey.talk())
console.log(tilly.talk())

console.log(daniel)
//creating a property isAdmin
daniel.isAdmin = false

console.log(daniel.isAdmin)
console.log(daniel)
console.log(daniel.areYouAdmin())

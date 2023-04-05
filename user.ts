class User {

  name: String;
  age: Number;

  constructor (name: String, age: Number) {
    this.name = name;
    this.age = age;
  }
}


const user1 = new User('Rafael', 2)
const user2 = new User('João', 15)
const user3 = new User('Marcelo', 25)
const user4 = new User('Luan', 42)
const user5 = new User('Maike', 12)
const user6 = new User('Richard', 62)
const user7 = new User('Muryel', 21)
const user8 = new User('Jeremias', 10)
const user9 = new User('Pedro', 7)
const user10 = new User('Paulo', 24)

const lista = [
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
  user7,
  user8,
  user9,
  user10
]

console.log(lista)

const randomList: Array<User> = []

while (randomList.length < 4) {
  const rand: Number = Math.floor(Math.random() * lista.length)
  if(!randomList.includes(rand)) {
    randomList.push(lista[rand])
  }

}


for(let i = 0; i < randomList.length; i++){
    console.log(randomList[i].name)
}


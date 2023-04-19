var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var user1 = new User('Rafael', 2);
var user2 = new User('João', 15);
var user3 = new User('Marcelo', 25);
var user4 = new User('Luan', 42);
var user5 = new User('Maike', 12);
var user6 = new User('Richard', 62);
var user7 = new User('Muryel', 21);
var user8 = new User('Jeremias', 10);
var user9 = new User('Pedro', 7);
var user10 = new User('Paulo', 24);
var lista = [
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
];
console.log(lista);
var randomList = [];
while (randomList.length < 4) {
    var rand = Math.floor(Math.random() * lista.length);
    if (!randomList.includes(rand)) {
        randomList.push(lista[rand]);
    }
}
for (var i = 0; i < randomList.length; i++) {
    console.log(randomList[i].name);
}

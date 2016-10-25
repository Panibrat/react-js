/**
 * Created by cpaniba on 15.10.2016.
 */
"use strict";
//alert(1/0);
//[1, 2].forEach(alert);
/*var numer = 5;
var str='qwerty';
for(var i=0; i<str.length; i++){
    console.log(str[i]);
}
console.log(typeof (str));
console.log(typeof (numer));
var ask = prompt("Number?");
console.log(typeof (+ask));
ask = +ask;
console.log((ask.toString(2)));
var result = confirm("Confirm!!!");
console.log(result);

var a= prompt("a=");
var b = prompt("b=");
(+a+(+b)<4) ? result = 'Less':result = 'More';
console.log(result);
console.log((+a+(+b)<4));

alert( 1 && 2 && null && 3 ); // null
alert( 1 && null && 2 );
console.log(1 && null && 2);*/

var func = function(){
    var z = 111;
    var x = arguments[0];
    var y = arguments[1];
    //console.log(arguments);
    console.log(x+y);
};

function calc(){
    var x = 5;
    return function(){
        return Math.pow(x,2);
    }
}

var Test = function(){
    this.x = 10;
};
var test = new Test();
//console.log(test.x);

var person = {
    name: "John",
    age: 45,
    gender: "male",
    greet: function(){
        return "Hello, "+ this.name;
    }
};
/*console.log(person.name);
console.log(person["age"]);
console.log(person.greet());
console.log(person.hasOwnProperty("age"));*/
delete person.age;
//console.log("name" in person);
person.id = 1;


var Human = function(name){
    this.name = name;
    this.greet = function(){
        return "Hi, my name is " + this.name + "!";
    }
};
Human.prototype.shout = function(word){
    return word.toUpperCase();
};
var men = new Human("Sasa");
var girl = new Human("Julia");
Human.prototype.smile = function(){
    return this.name + " smiling...";
};

var Car;
Car = {
    constructor: function (make, model, power) {
        this.make = make;
        this.model = model;
        this.power = power;
        return this;
    }
};
var mers = new Car.constructor("mers", "s550", 450);
var bmw = Object.create(Car).constructor("bmw", "x6", 550);

var Truck = Object.create(Car);
Truck.constructor = function(make, model, power, tonnage){
    Car.constructor.apply(this, arguments);
    this.tonnage = tonnage || 3.5;
    return this;
};

function showMessage(from, text) {
    //if (text === undefined) {
    //    text = 'текст не передан';
    //}
    text = text || 'текст не передан';
    console.log( from + ": " + text );
}

function checkAge(age) {
    return (age > 18)?  true: confirm('Родители разрешили?');
}
function checkAge2(age) {
    return (age > 18)|| confirm('Родители разрешили?');
}
/*
 var x=prompt("x?");
 var n=prompt("n?");
 pow(x,n);
 function pow(x,n){
 var res = x;
 for(var i=1;i<n;i++){
 res*=x;
 }
 alert (res);
 }*/

/*
function sayHi() {
    alert( "Привет" );
}

alert( sayHi ); // выведет код функции*/

/*
var summma = new Function('a,b', ' return a+b; ');

var result = summma(1, 2);
alert( result ); // 3*/


/*function sumTo(n){
    if(n==1){
        return 1
    } else{
        return n + sumTo(n-1)
    }
}*/

function fib(n) {
    var a =[1,1];
    for(var i = 2; i<n; i++){
      a[i] = a[i-1] + a[i-2];
    }
    //return a[i-1];
    return a;

}

//alert( fib(3) ); // 2
//alert( fib(7) ); // 13
//alert( fib(77)); // 5527939700884757
function sum(a){
    return function(b){
        return (a+b);
    }
}

function makeBuffer() {
    var text = '';
    makeBuffer.test = "testik";
     function bf(vvv) {
        if (arguments.length == 0) { // вызов без аргументов
            return text;
        }
        text += vvv;
    };
    bf.clear = function(){
        text = '';
    };
    return bf;
};

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
//alert( buffer() ); // 'Замыкания Использовать Нужно!'

var buffer2 = makeBuffer();
buffer2(0);
buffer2(1);
buffer2(0);

//alert( buffer2() ); // '010'


function makeCounter() {
    function counter() {
        return counter.currentCount++;
    };
    counter.currentCount = 1;

    return counter;
}
var ccc = makeCounter();
//alert( ccc() ); // 1
ccc.currentCount = 5;
//alert( ccc() ); // 5

function rettest(){
    call.number = 5;
    call.setsix = function(){
        call.number = 6;
        return 555;
    };
    function call(){
        return "callme";
    };
    return call;
}
var t= rettest();


var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
}, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
}, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
}];

function byField(field){
    return function (a,b){
        return a[field] > b[field] ? 1: -1;
    }
}
users.sort(byField('name'));
users.forEach(function(user) {
    //console.log( user.name );
}); // Вася, Маша, Петя

users.sort(byField('age'));
users.forEach(function(user) {
    //console.log( user.name );
}); // Маша, Вася, Петя




function filter(arr, fun){
    var sorted = [];
    for(var i=0;i<arr.length;i++){
        if(fun(arr[i])){
            sorted.push(arr[i]);
        }
    }

    return sorted;
}
/* .. ваш код для filter, inBetween, inArray */
var arr = [1, 2, 3, 4, 5, 6, 7];
function inBetween(a){
    if (a in arr){
        console.log("yes " + a );
    }
}
function odd(a){
    return a % 2 == 0;

}

function cons(a){
    console.log("yes " + a );
}

function inBetween(a, b){
    return function(x){
        return x >= a && x <= b;
    }
}


function makeArmy() {

    var shooters = [];
    for ( var i = 0; i < 10; i++) {
        var shooter = function() { // функция-стрелок
            alert( i ); // выводит свой номер
        };
        shooters.push(shooter);
    }

    return shooters;
}

var army = makeArmy();

//army[0](); // стрелок выводит 10, а должен 0
//army[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9




function isEmpty(obj) {
    for (var key in obj){
        return false
    }
    return true
}

var schedule = {};

//alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

//alert( isEmpty(schedule) ); // false



var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250,
    toString: function(){
        return "Salaries";
    }
};

//... ваш код выведет 650
function countMoney(obj){
    var allMoney = 0;
    for(var money in obj){
        allMoney += obj[money];
    }
    return allMoney;
}
//alert(countMoney(salaries));



var sorted = [1, -2, 15, 2, 0, 8].sort(function(a, b) {
   // alert( a + " <> " + b );
});





var arr = ["Яблоко", "Апельсин", "Груша"];

arr.forEach(function(item, i, arr) {
    //alert( i + ": " + item + " (массив:" + arr + ")" );
});

var vasya = {
    age: 21,
    name: 'Вася',
    surname: 'Петров'
};

var user = {
    isAdmin: false,
    isEmailConfirmed: true
};

var student = {
    university: 'My university'
};




var start = new Date; // засекли время

// что-то сделать
for (var i = 0; i < 1000000; i++) {
    var doSomething = i * i * i;
}

var end = new Date; // конец измерения

//alert( "Цикл занял " + (end - start) + " ms" );

var user = {
    firstName: "Вася",
    surname: "Петров"
}

Object.defineProperty(user, "fullName", {

    get: function() {
        return this.firstName + ' ' + this.surname;
    },

    set: function(value) {
        var split = value.split(' ');
        this.firstName = split[0];
        this.surname = split[1];
    },
    enumerable: true

});

user.fullName = "Петя Иванов";
//alert( user.firstName ); // Петя
//alert( user.surname ); // Иванов


function Article(){
    Article.count++;
}
Article.count = 0;
new Article();
new Article();




function User() {
    User.countUsers++;
    this.sayHi = function() {
        alert(this.name);
        //alert("userrrr");
    };
    this.cr = function(){
        var us = new User();
        us.name = 'Аноним';
        return us;
    };
    User.getCount = function(){
        return User.countUsers;
    }
}


User.countUsers = 0;
var a = new User();


function showFullName(a) {
    alert( a + this.firstName + " " + this.lastName );
}





var names = ['HTML', 'CSS', 'JavaScript'];

var nameLengths = names.map(function(name, index, array) {
    return array;
});

// получили массив с длинами
//console.log( nameLengths ); // 4,3,10




function CoffeeMachine(power) {

    this.waterAmount = 0;

    // физическая константа - удельная теплоёмкость воды для getBoilTime
    var WATER_HEAT_CAPACITY = 4200;
var self = this;
    // расчёт времени для кипячения
    function getBoilTime() {
        return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power; // ошибка!
    }

    // что делать по окончании процесса
    function onReady() {
        console.log( 'Кофе готово!' );
    }

    this.run = function() {
        setTimeout(onReady, getBoilTime());
    };

}
var coffeeMachine = new CoffeeMachine(100000);
coffeeMachine.waterAmount = 200;

//coffeeMachine.run();

var animal = {
    eats: true
};
var rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;


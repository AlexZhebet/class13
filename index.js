// В объектно-ориентированном
// программировании класс  это расширяемый шаблон кода для создания объектов,
// который устанавливает в них
// начальные значения (свойства) и реализацию поведения (методы).


//


// class Myclass {
// 	constructor() {
// 	}
//
// 	method1() { ... }
// 	method2() { ... }
// 	method3() { ... }
// }

// class User {
// 	constructor(name, lastName) {
// 		this.name = name
// 		this.lastName = lastName
// 	}
//
// 	get name() {
// 		return this._name;
// 	}
//
// 	set name(value) {
// 		if (value.length < 4) {
// 			alert("Имя слишком короткое.");
// 			return;
// 		}
// 		this._name = value;
// 	}
//
// 	sayHi() {
// 		console.log(this.name)
// 	}
//
// 	sayBy() {
// 		console.log('by')
// 	}
// }
//
//
// let user = new User('JonH','Joe');
// console.log(user)
// user.sayHi()
// user.sayBy()
//
// console.log(typeof User)

// const Dev = class MyDev {
// 	constructor() {
// 	}
// }

//
// class Animal {
// 	constructor(name, color, width) {
// 		this.speed = 0
// 		this.name = name
// 		this.color = color
// 		this.width = width
// 	}
//
// 	run(speed) {
// 		this.speed = speed
// 		console.log(`${this.name} бежит со скоростью ${this.speed}.`)
// 	}
//
// 	stop() {
// 		this.speed = 0;
// 		console.log(`${this.name} стоит неподвижно.`);
// 	}
// }
//
// class Rabbit extends Animal {
// 	constructor(name, earLength, color) {
// 		super(name, color);
// 		this.earLength = earLength
// 	}
// 	hide() {
// 		console.log(`${this.name} прячется!`)
// 	}
//
// 	run(speed) {
// 		super.run(speed)
// 		console.log('run from child')
// 	}
// }
//
//
// const rabbit = new Rabbit('roger', '20', 'red')
//
// console.log(rabbit);


class Character {
	constructor(name, health, strength, weapon, armor) {
		this.name = name
		this.health = health
		this.strength = strength
		this.weapon = weapon
		this.armor = armor
	}

	attach(target) {
		target.takeDamage(this.strength + (this.weapon ? this.weapon.damage : 0))
	}

	takeDamage(damage) {
		this.health -= damage
	}

	changeWeapon(weapon) {
		this.weapon = weapon
	}
}

class Weapon {
	constructor(name, damage, canShoot) {
		this.name = name
		this.damage = damage
		this.canShoot = canShoot
	}
}

console.dir(Weapon)

class Elf extends Character {
	constructor(name, health, strength, weapon) {
		super(name, health, strength, weapon)
		this.damageBonus = 0
		this.onTree = false
	}

	climbTree() {
		this.damageBonus += 2
		this.onTree = true
	}

	climbOFFTree() {
		this.damageBonus -= 2
		this.onTree = false
	}

	attach(target) {
		if(this.onTree && this.weapon.canShoot) {
			this.strength += this.damageBonus
		}
		super.attach(target);
	}
}

class Dwarf extends Character {
	constructor(name, health, strength, weapon) {
		super(name, health, strength, weapon)
	}
}


const sword = new Weapon('sword', 10, false);
const hammer = new Weapon('hammer', 15, false);
const bow = new Weapon('bow', 8, true);


const elf1 = new Elf('ElfName1', 100, 20, null);
const dwarf1 = new Dwarf('DwarfName1', 100, 30, null);

console.log(elf1)
console.log(dwarf1)

// elf1.changeWeapon(sword)
// dwarf1.changeWeapon(hammer)
//
// console.log(elf1)
// console.log(dwarf1)

// elf1.attach(dwarf1)
// dwarf1.attach(elf1)

// console.log(elf1)
// console.log(dwarf1)
//
// elf1.climbTree()
// elf1.changeWeapon(bow)
// elf1.attach(dwarf1)
//
// console.log(elf1)
// console.log(dwarf1)


// --- practice
class Vehicle {
	constructor(make, model, year){
		this.make = make
		this.model = model
		this.year = year
	}

	start(){
		console.log(`Vehicle ${this.model} is starting  ${this.year}`)
	}
}

class Car extends Vehicle {
	constructor(make, model, year, numDoors){
		super(make, model, year);
		this.numDoors = numDoors
	}
	start(){
		super.start()
		console.log(`Car ${this.model} is starting  ${this.year}`)
	}
}

const nissan = new Car ('nissan', 'juck', '2022', 4);

console.log(nissan.start())



class Person {
	constructor (name){
		this.name = name
	}
	greet(){
		console.log(`My name Is ${this.name}`)
	}
}

class Employee extends Person {
	constructor (name, position){
		super(name)
		this.position = position

	}

	work(){
		console.log(`My name Is ${this.name} working as a ${this.position} `)
	}

}

const john  = new Employee ('John', "Developer");
john.work()


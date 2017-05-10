//DRILL 1
const loaf = {
	flour: 300,
	water: 210,
	hydration: function(){ 
		return this.water/this.flour * 100;
	}
}

console.log(loaf.hydration());

//DRILL 2

const object = {
	foo: "yes",
	bar: "no",
	fum: "maybe",
	quux: "um",
	spam: "blah"
}

for (let key in object){
	console.log(key + " " + object[key]);
}


//DRILL 3

const stuff = {
	meals: ['breakfast', 'second breakfast', 'elevenses', 
	'lunch', 'afternoon tea', 'dinner', 'supper']
}

console.log(stuff.meals[3]);


//DRILL 4

const person1 = {
	name: "Avi",
	title: "glorius bunbun"
}

const person2 = {
	name: "Sonja",
	title: "fabulous reader"
}

const person3 = {
	name: "Wednesday",
	title: "snarkiest of all"
}

const array = [person1, person2, person3];

array.forEach(each => console.log(each));

//DRILL 5


//DRILL 6


//DRILL 7
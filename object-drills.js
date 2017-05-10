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
	title: "Glorius Bunbun"
}

const person2 = {
	name: "Sonja",
	title: "Fabulous Reader",
	boss: "Avi"
}

const person3 = {
	name: "Wednesday",
	title: "Snarkiest of All",
	boss: "Avi"
}

const array = [person1, person2, person3];

array.forEach(each => console.log(each.name + ": " + each.title));

//DRILL 5

array.forEach(function(each){
	if(!each.boss){
		console.log(`${each.title} ${each.name} doesn't report to anybody.`);
	} else{
		console.log(`${each.title} ${each.name} reports to ${each.boss}.`);
	} 
});



//DRILL 6

function decode(secret){
    let code = secret.charAt(0);
    if (code=='a'){
      console.log(secret.charAt(1));
    }
    else if (code=='b'){
      console.log(secret.charAt(2));
    }
    else if (code=='c'){
      console.log(secret.charAt(3));
    }
    else if (code=='d'){
      console.log(secret.charAt(4));
    }
    else{
      console.log(' ');
    }
}

function decodeSentence(sentence) {
    sentence = sentence.split(" ");
    
   return sentence.map(decode).join('');
}
const code = {
	a: 2,
	b: 3,
	c: 4,
	d: 5
}
function decode(secret, code){
	let decoded = "";
	//console.log(secret.split(" "));
	//console.log(code);
	secret.split(" ").forEach(
		function(word){
			//console.log(code);
			let char = word.charAt(0);
			let value = code[char];
			//console.log(char);
			//console.log(word);
			//console.log(value);
			if(value){
				decoded+=word.charAt(value-1);
			}
			else{
				decoded+=" ";
			}
		})

	/*for (let word in secret.split(" ")){
		console.log(word);
		//console.log(word.charAt(0));
		let value = code[word.charAt(0)];
		//console.log(code);
		//console.log(value);
		if(value){
			decoded+=word.charAt(value-1);
		}
		else{
			decoded+=" ";
		}
	}*/
	return decoded;
}
console.log(decode("craft block argon meter bells brown croon droop", code));


//DRILL 7

function createCharacter(name, nickname, race, weapon, origin, attack, defense){
	return {
		name, nickname, race, weapon, origin, attack, defense,
		describe: function(){
			console.log(`${this.name} is a ${this.race} from ${this.origin} who uses ${this.weapon}.`);
		},
		evaluateFight: function(character){
			const charAttack = character.attack - this.defense;
			const myAttack = this.attack - character.defense;
			if(charAttack < 0){ charAttack = 0;}
			if(myAttack < 0){ myAttack = 0;}
			console.log(`Your opponent takes ${charAttack} damage and you receive ${myAttack} damage.`);
		},

	};
}

const characters = [createCharacter("Gandalf the White", "gandalf", "Wizard", "a wizard staff", "Middle Earth", 10, 6), 
 createCharacter("Bilbo Baggins", "bilbo", "Hobbit", "The Ring", "The Shire", 2, 1),
 createCharacter("Frodo Baggins", "frodo", "Hobbit", "a String and Barrow Blade", "The Shire", 3, 2),
 createCharacter("Aragorn son of Arathorn", "aragorn","Man", "Anduril", "Dunnedain", 6, 8),
 createCharacter("Legolas", "legolas", "Elf", "a Bow and Arrow","Woodland Realm", 8, 5)];

 console.log(characters);

 characters.push(createCharacter("Arwen Undomiel", "arwen", "Half-Elf", "Hadhafang", "Rivendell", 7, 5));
 console.log(characters);

 const aragorn = (characters.find(character => character.nickname === "aragorn"));
 console.log(aragorn);

 console.log(aragorn.describe());

 const hobbits = characters.filter(character => character.race === "Hobbit");
 console.log(hobbits);

 const attackers = characters.filter(character => character.attack > 5);
 console.log(attackers);
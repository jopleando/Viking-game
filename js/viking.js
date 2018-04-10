
//CONSTRUCTOR DE VIKINGOS.

var Viking = function (name, health, strength, age, cry) {
	this.name = name;
	this.health = Math.round((Math.random() * (200 - 100) + 100));
	this.strength = Math.round((Math.random() * (50 - 10) + 10));
	this.age = Math.round((Math.random() * (40 - 15) + 15));
	this.cry= "por Odin!!" ;
}


var Sajones = function (health, strength) {

	this.health = Math.round((Math.random() * (80 - 40) + 40));
	this.strength = Math.round((Math.random() * (20 - 5) + 5));
}

// ---------------------------------------------------------

// CREATER VIKING
var viking1 = new Viking("Ragnar");
console.log(viking1);
var viking2 = new Viking("Erza");
console.log(viking2);

//GRITO DE GUERRA

Viking.prototype.cry= function(){
	console.log(this.cry + "!!")

}


// CREATER SAJON
/*
Viking.prototype.attack = function () {
	return this.strength;
}

Viking.prototype.reciveDamage = function (damage) {
	this.health -= damage;
	this.isLose(damage);
}

Viking.prototype.isLose = function () {
	if (this.health <= 15) {
		return this.name + " It\'s over"
	} else {
		return this.name + " you receive " + strength + " damage"
	}
}*/


//CREACION DEL PIT-AREA DE ENTRENAMIENTO


var pitFight = function (viking1, viking2) {
	var turn = 1;
	console.log(viking1.name + " grita " + viking1.cry)

	while (turn <= 8 && (viking2.health - viking1.strength) > 1 && (viking1.health - viking2.strength)) {
		console.log("Turno " + turn + "  de " + viking1.name);
		viking2.health -= viking1.strength;
		console.log(viking1.name + " ataca con un puñetazo a " + viking2.name + ", ha recibido " + viking1.strength + " daño")
		console.log("La vida de " + viking2.name + " es de " + viking2.health)
		console.log("Turno " + turn + "  de " + viking2.name);
		viking1.health -= viking2.strength;
		console.log(viking2.name + " ataca con un puñetazo a " + viking1.name + ", ha recibido " + viking2.strength + " daño")
		console.log("La vida de " + viking1.name + " es de " + viking1.health)
		console.log("-------------------------------------------")
		turn++;
	}

	if (viking1.health > viking2.health) {
		console.log(viking1.name + " ha ganado");
	}
	else if (viking1.health < viking2.health) {
		console.log(viking2.name + " ha ganado");
	}
}



//--------------------------------------------------------------------------






var allVikings = [];

function addVikings(num){
	
	var viking;
	for (var i = 1; i <=num;i++) {
		viking = new Viking("viking"+[i]);
		console.log(viking);
		console.log("Soy yo el " +viking.name);
		allVikings.push(viking);	
	}
	//return allVikings;
 }

var allSajons= [];

function addSajons (num){
 	
 	var sajons;
 	for(var i =1; i<=num; i++){
 		sajons = new Sajones("sajons" +[i]);
 		console.log(sajons);
 		console.log("Yo soy el sajón" + [i]);
 		allSajons.push(sajons);
 	}
 	//return allSajons;
 }


var war = function (addSajons, addVikings){

	var maxTurn = Math.round((Math.random() * (8 - 5) + 5));
	var turn= 1;
	console.log(viking.name + " grita " + viking.cry)

	while (turn<=maxTurn){
		for (var i=0; i<=allVikings.length; i++){
			for (var j= 0; j<=allSajons.length; j++){
				console.log("turno" + turn)
			}
		}
		turn++;

	}



	console.log(allVikings)
	console.log(allSajons)
	

}








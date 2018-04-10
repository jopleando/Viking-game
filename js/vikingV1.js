
// --- CONSTRUCTOR DE VIKINGOS. ---

var Viking = function (name, health, strength, age, cry) {
  this.name = name;
  this.health = Math.round((Math.random() * (200 - 100) + 100));
  this.strength = Math.round((Math.random() * (50 - 10) + 10));
  this.age = Math.round((Math.random() * (40 - 15) + 15));
  this.cry = "por Odin!!";
}


var Sajones = function (health, strength) {

  this.health = Math.round((Math.random() * (150 - 90) + 90));
  this.strength = Math.round((Math.random() * (40 - 20) + 20));
}

// ---------------------------------------------------------

// --- CREATER VIKING. ---

var viking1 = new Viking("Ragnar");
console.log(viking1);
var viking2 = new Viking("Erza");
console.log(viking2);

// ---------------------------------------------------------

// --- GRITO DE GUERRA. ---

Viking.prototype.cry = function () {
  console.log(this.cry + "!!")

}

// ---------------------------------------------------------


// --- CREACION DEL PIT-AREA DE ENTRENAMIENTO. ---

var pitFight = function (viking1, viking2) {
  var turn = 1;
  console.log(this.viking1.name + " grita " + this.viking1.cry)

  while (turn <= 8 && this.viking1.health > this.viking2.strength && this.viking2.health > this.viking1.strength) {
    console.log("Turno " + turn + "  de " + viking1.name);
    this.viking2.health -= this.viking1.strength;
    console.log(this.viking1.name + " ataca con un puñetazo a " + this.viking2.name + ", ha recibido " + this.viking1.strength + " daño")
    console.log("La vida de " + this.viking2.name + " es de " + this.viking2.health)
    console.log("Turno " + turn + "  de " + this.viking2.name);
    this.viking1.health -= this.viking2.strength;
    console.log(this.viking2.name + " ataca con un puñetazo a " + this.viking1.name + ", ha recibido " + this.viking2.strength + " daño")
    console.log("La vida de " + this.viking1.name + " es de " + this.viking1.health)
    console.log("-------------------------------------------")
    turn++;
  }

  if (this.viking1.health > this.viking2.health) {
    console.log(this.viking1.name + " ha ganado, su salud es de: " + this.viking1.health + " y " + this.viking2.name + " perdio, su salud es de: " + this.viking2.health);
  }
  else if (this.viking1.health < this.viking2.health) {
    console.log(this.viking2.name + " ha ganado, su salud es de: " + this.viking2.health + " y " + this.viking1.name + " perdio, su salud es de: " + this.viking1.health);
  }
}

//--------------------------------------------------------------------------

// --- CREA EL EJERCITO DE VIKINGOS. ---

var allVikings = [];

function addVikings(num) {

  var viking;
  for (var i = 1; i <= num; i++) {
    viking = new Viking("viking" + [i]);
    //console.log(viking);
    //console.log("Soy yo el " + viking.name);
    allVikings.push(viking);
  }
  //return allVikings;
}

// ---------------------------------------------------------

// --- CREA EL EJERCITO DE SAJONES. ---

var allSajons = [];

function addSajons(num) {

  var sajons;
  for (var i = 1; i <= num; i++) {
    sajons = new Sajones("sajons" + [i]);
    //console.log(sajons);
    //console.log("Yo soy el sajón" + [i]);
    allSajons.push(sajons);
  }
  //return allSajons;
}

// ---------------------------------------------------------

// --- CREACION DE WAR. ---

var war = function (addVikings, addSajons) {

  var armyViking = this.allVikings.length;
  var armySajons = this.allSajons.length;
  var maxTurn = Math.round((Math.random() * (8 - 5) + 5));
  var turn = 1;

  console.log("-----------------------------------------------------------------------");
  console.log("El ejercito de los vikingos cuenta con " + armyViking + " soldados");
  console.log("Y el ejercito de los sajones cuenta con " + armySajons + " soldados");
  console.log("Los Vikingos gritan " + this.allVikings[0].cry);
  console.log("-----------------------------------------------------------------------");


  var saxonIndex = 0;
  var selectedSajon;

  while (turn <= maxTurn && this.allVikings.length > 0 && this.allSajons.length > 0) {
    var vikingIndex = 0;
    var selectedViking;
    while (vikingIndex < this.allVikings.length && this.allSajons.length > 0) {
      selectedViking = this.allVikings[vikingIndex];
      selectedSajon = this.allSajons[saxonIndex];

      console.log(" --- Turno " + turn + " de los Vikingos --- ");
      selectedSajon.health -= selectedViking.strength;
      console.log(selectedViking.name + " hizo " + selectedViking.strength + " puntos de daños");
      console.log("El sajon" + allSajons.length + " esta ha " + selectedSajon.health + " puntos de vida");
      if (selectedSajon.health <= 0) {
        this.allSajons.splice(saxonIndex, 1);
        console.log("El sajon" + allSajons.length + " a muerto, uno nuevo entra en combate");
      } else {
        console.log(" --- Turno " + turn + " de los Sajones --- ");
        selectedViking.health -= selectedSajon.strength;
        console.log("El sajon" + allSajons.length + " hizo " + selectedSajon.strength + " puntos de daños");
        console.log(selectedViking.name + " esta ha " + selectedViking.health + " puntos de vida");
      }
      if (selectedViking.health <= 0) {
        console.log(selectedViking.name + ", murio en combate");
        this.allVikings.splice(vikingIndex, 1);
      } else {
        vikingIndex++;
        console.log(selectedViking.name + ", entra en combate");
      }
      console.log("-----------------------------------------------------------------------");
    }

    turn++;

  }
 // LOS CAIDOS

  var vikingsInValvalhalla = armyViking - this.allVikings.length;
  var percentVikingsInValvalhalla = ((vikingsInValvalhalla / armyViking) * 100);
  var deadSajons = armySajons - this.allSajons.length;
  var percentDeadSajons = ((deadSajons / armySajons) * 100);
  var battleResult;

  if (percentDeadSajons > percentVikingsInValvalhalla) {
    battleResult = "ha ganado el ejercito de los vikingos";
  } else if (percentVikingsInValvalhalla > percentDeadSajons) {
    battleResult = "ha ganado el ejercito de los sajones";
  } else {
    battleResult = "ha habido un empate";
  }

  console.log("-----------------------------------------------------------------------");
  console.log("La batalla ha terminado, " + battleResult);
  console.log("El resultado de la batalla ha sido:");
  console.log("Muertes vikingos: " + vikingsInValvalhalla + " de " + armyViking + " (" + percentVikingsInValvalhalla + "%)");
  console.log("Muertes sajones: " + deadSajons + " de " + armySajons + " (" + percentDeadSajons + "%)");
  console.log("-----------------------------------------------------------------------");
}
// ---------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------








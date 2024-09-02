const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion:{
                name: "Frank",
                type: "Flea",
                belongings: ["Small hat", "Sunglasses"]    
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}


console.log(adventurer.inventory[0]);

//As an additional practice exercise, create a loop that logs each item in Robin’s inventory.
for(i=0; i<adventurer.inventory.length; i++){
    console.log(adventurer.inventory[i])
}


//Now we have a method for “dice rolls,” a common way to handle outcomes in adventuring games. Test this method by calling adventurer.roll() a few times.
adventurer.roll(2);
adventurer.roll(6);
adventurer.roll(8);
adventurer.roll(4);
adventurer.roll(27);  // since it's being a object we can call method like objectName.methodName

//******************** OBJECTS ENDS ***************************/


//*********************CLass start*****************************/

class Character {
    static MAX_HEALTH = 100
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}


const robin1 = new Character("Robin");
robin1.inventory = ["sword", "potion", "artifact"];
robin1.companion = new Character("Leo");
robin1.companion.type = "Cat";
robin1.companion.companion = new Character("Frank");
robin1.companion.companion.type = "Flea";
robin1.companion.companion.inventory = ["small hat", "sunglasses"];

robin1.companion.companion.roll(5);       // since it's being a class no need to add classanme to call function

robin1.companion.roll(5)



class Adventurer extends Character {
    static ROLES = ["Fighter","Healer", "Wizard"]
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");

        // console.log(Adventurer.ROLES) ///// /******* Since it's static we have to use it with classname.array */
        if(Adventurer.ROLES.includes(this.role)){
            console.log("This role is available"); 
        }else{
            console.log("Role not available");
            throw new Error("Role not valid"); 
        }
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
    isValidRole(role) {
        
    }
}

class Companion extends Character {
    constructor(name, type) {
        super(name)
        this.name = name,
        this.type = type
    } 
}
    

    const adventurer1 = new Adventurer("Arthur", "Healer");  // Valid role
    const adventurer2 = new Adventurer("Arthur", "Painter");  // Not Valid role



//////////// Part 5 : 

class AdventurerFactory {  
  constructor (role) {
    this.role = role;
    this.adventurers = [];
  }
  generate (name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
  }
  findByIndex (index) {
    return this.adventurers[index];
  }
  findByName (name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

const healers = new AdventurerFactory("Healer");
const robin = healers.generate("Robin");

console.log(healers);
console.log(robin);





    
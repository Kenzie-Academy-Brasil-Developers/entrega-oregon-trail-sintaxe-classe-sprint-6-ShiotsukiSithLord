class Traveler{
    constructor(name){
        this._name = name;
        this._food = 1;
        this._health = true;
    }
    hunt(){
        
        return this._food += 2
    }

    eat(){
        if(this._food <= 0){
            return 0
        }
        return this._food -= 1
    }

}

class Wagon {
    constructor(limit){
  this._limit = limit;
  this._passangers = [];
    }
    get passangerstats(){
        return `${this._passangers}`;
    }
   set passangerstats(value){
     this._val = value;

     
   }
   
    join(x){
     
     if(this._passangers.length < this._limit){ 
      this._passangers.push(x)
     }
    
    }
   getAvailableSeatCount(){
       return this._limit - this._passangers.length
   }
   shouldQuarantine(x){
      x = (this._passangers[0]._food > 0 && this._passangers[1]._food > 0) ? false : true;
       return x
   }
   totalFood(){
       let foodcount = 0;
      for(let foods in this._passangers){ 
         foodcount += this._passangers[foods]._food
      }
       return foodcount
   }
 
}


// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);
 
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
 
wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
 
henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)
 
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);

class Traveler{
    constructor (name, Henrietta) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt () {
        this.food = this.food + 2
        return this.food
    }   
    eat () {
        if(this.food <= 0){
            this.isHealthy = false
        
    }else {  
           this.food = -1
    }
    return this.food + " Henrietta."
 }
}
class Wagon {
    constructor(capacity){
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount(){
        return this.capacity - this.passengers.length
    }

  join(traveler){
     if(this.getAvailableSeatCount() > 0) {
        this.passengers.push(traveler)
    }
}
  shouldQuarantine(){
    if ( this.passengers.some(traveler => traveler.ishealthy === false)){
      return true
  }  else {
      return false
  }
 } 
 
 totalFood (){
     let food = 0
     this.passengers.forEach(traveler => this.totalFood += traveler.food)
     return food
    } 
        
}



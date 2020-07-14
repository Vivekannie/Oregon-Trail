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



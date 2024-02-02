function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Adding method to Car prototype
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`
};

// Constructor function for SportsCar, inheriting from Car
function SportsCar(make, model, topSpeed) {
    // Use the Car constructor within SportsCar
    Car.call(this, make, model);
    
    this.topSpeed = topSpeed;
}

// Inheriting Car prototype into SportsCar prototype
SportsCar.prototype = Object.create(Car.prototype);

// Adding method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Correcting typo in setting prototype
SportsCar.prototype.constructor = SportsCar;

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

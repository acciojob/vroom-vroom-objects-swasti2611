// Complete the js code
function Car(make, model) {
	this.make=make;
	this.model=model
}
Car.prototype.getMakeModel=function(){
	return  this.make  +  this. model 
}

function SportsCar(make, model, topSpeed) {
	this.make=make;
	this.model=model;
	this.topSpeed=topSpeed;
}
SportsCar.prototype.getTopSpeed=function(){
	return this.topSpeed.
}

Car.protopype__proto__=object.create(SportsCar.prototype )
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

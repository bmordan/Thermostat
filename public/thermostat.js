function Thermostat () {
  this.isPowerSavingOn = true
  this._temperature = 20
}

Thermostat.prototype = {
  get temperature() { return this._temperature }
}
Thermostat.prototype.increase = function() {
  this.increaseTemperatureBy(1)
  return this.temperature
}
Thermostat.prototype.increaseTemperatureBy = function(degrees) {
  this._temperature += degrees
  if( this.isPowerSavingOn && this.temperature > 25) this._temperature = 25
  if(!this.isPowerSavingOn && this.temperature > 35) this._temperature = 35
}
Thermostat.prototype.decrease = function() {
  this.decreaseTemperatureBy(1)
  return this.temperature
}
Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
  this._temperature -= degrees
  if (this.temperature < 10) this._temperature = 10
}
Thermostat.prototype.reset = function() {
  return this._temperature = 20
}
Thermostat.prototype.colorise = function(temperature) {
  var rainbow = new Rainbow()
  rainbow.setSpectrum('green','yellow','red')
  rainbow.setNumberRange(10,35)
  var color = rainbow.colourAt(temperature)
  return '#'+color
}


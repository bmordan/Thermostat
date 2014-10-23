function ThermostatView (element) {
  this.element = $(element);
  this.thermostat = new Thermostat;
  this.element.text(this.thermostat.temperature)
  this.bindTo('.increase', this.thermostat, this.thermostat.increase)
  this.bindTo('.decrease', this.thermostat, this.thermostat.decrease)
  this.bindTo('.reset', this.thermostat, this.thermostat.reset)
}

ThermostatView.prototype.bindTo = function(selector, obj, func){
  $(selector).on('click', function() {
    $('artical h1').text(func.call(obj))
  })
}

$(document).ready(function() {
  new ThermostatView('artical')
});
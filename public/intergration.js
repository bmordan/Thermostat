function ThermostatView (element) {
  this.element = $(element);
  this.thermostat = new Thermostat;
  this.element.text(this.thermostat.temperature)
  this.element.css('background-color','#cce600')
  this.bindTo('.increase', this.thermostat, this.thermostat.increase)
  this.bindTo('.decrease', this.thermostat, this.thermostat.decrease)
  this.bindTo('.reset', this.thermostat, this.thermostat.reset)
}

ThermostatView.prototype.bindTo = function(selector, obj, func){
  $(selector).on('click', function() {
    $('artical').text(func.call(obj));
    $('artical').css('background-color', obj.colorise(obj.temperature))
  });
}

ThermostatView.prototype.colorise = function(temp) {
  return this.thermostat.colorise(temp)
}

$(document).ready(function() {
  new ThermostatView('artical')
});
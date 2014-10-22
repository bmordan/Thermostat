"use strict";
describe('With this amazing thermostat you can', function() {

  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat;
  })
 
  it('Turn it on. It is in power saving mode', function() {
    expect(thermostat.isPowerSavingOn).toEqual(true)
  })

  it('and has a starting temp of 20.', function() {
    expect(thermostat.temperature).toEqual(20)
  })

  describe('Control the Thermostat', function() {

    it('You can increase the temp with the up button', function() {
      thermostat.increase()
      expect(thermostat.temperature).toEqual(21)
    })

    it('You can increase the temp with the up button.', function() {
      thermostat.decrease()
      expect(thermostat.temperature).toEqual(19)
    })

    it('you can increase in bigger steps if you want to', function() {
      thermostat.increaseTemperatureBy(3)
      expect(thermostat.temperature).toEqual(23)
    })

    it('you can decrease in bigger steps if you want to', function() {
      thermostat.decreaseTemperatureBy(3)
      expect(thermostat.temperature).toEqual(17)
    })

    it('It has a min temperature of 10', function() {
      thermostat.decreaseTemperatureBy(20)
      expect(thermostat.temperature).toEqual(10)
    })

    it('In power saving mode you can\'t exceed 25 degrees', function() {
      thermostat.increaseTemperatureBy(100)
      expect(thermostat.temperature).toEqual(25)
    })

    it('but with power saving off you can go upto 35', function() {
      thermostat.isPowerSavingOn = false
      thermostat.increaseTemperatureBy(100)
      expect(thermostat.temperature).toEqual(35)
    })

    it('you can reset the Thermostat with the reset button', function() {
      thermostat.increase()
      thermostat.reset()
      expect(thermostat.temperature).toEqual(20)
    })

  });

  describe('Colorise the reading', function() {
    
    var rainbow

    beforeEach(function(){
      rainbow = new Rainbow
    })

    it('returns color values for the frontend', function(){
      expect(thermostat.colorise(20)).toEqual('cce600')
    })

    it('green when below 18', function(){
      expect(thermostat.colorise(17)).toEqual('8fc700')
    })

    it('yellow when below 25', function(){
      expect(thermostat.colorise(24)).toEqual('ffe000')
    })

    it('red when over 25', function(){
      expect(thermostat.colorise(29)).toEqual('ff7a00')
    })
  });

})


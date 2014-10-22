"use strict";
describe('This amazing thermostat', function() {

  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat;
  })
 
  it('when you turn it on it is in power saving mode', function() {
    expect(thermostat.isPowerSavingOn).toEqual(true)
  })

})
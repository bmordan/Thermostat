describe('The Thermostat view', function() {


  var element;
  var thermostat;
  var selector

  beforeEach(function() {
    $('body').append('<h1></h1>').append('<a class="increase"></a>');
    element = $('h1');
    view = new ThermostatView(element);
  })

  afterEach(function() {
    element.remove()
  })

  it('you pass into the view the element', function() {
    expect(view.element).toEqual($('h1'))
  })

  it('then make a new instance of the thing to bind to', function() {
    expect(view.thermostat.temperature).toEqual(20)
  })

  it('now you can set the temperature in the element', function() {
    expect(element).toContainText("20")
  })

  describe('Binding to the element', function() {

    beforeEach(function() {
      selector = $('.increase')
      thermostat = new Thermostat
    })

    it('has a bindTo method', function() {
      expect(view.bindTo(selector, thermostat, thermostat.increase)).toBe(undefined)
    })

    it('has the element in the DOM', function() {
      expect(selector).toBeInDOM()
    })

    it('binds thermostat methods to html elements', function() {
      expect(selector).toHandle('click')
    })
    
  })

})
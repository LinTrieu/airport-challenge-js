describe("Weather", function() {
  var weather;

  beforeEach(function() { 
    weather = new Weather();  
  });

  it("weather exists", function() {
    expect(weather).toEqual(jasmine.any(Weather));
  });

  it("should respond to isStormy", function() {
    expect(weather.isStormy).toBeDefined();
  });

  it("isStormy should be a function", function() {
    expect(weather.isStormy).toEqual(jasmine.any(Function));
  });

});
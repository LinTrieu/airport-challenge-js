describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("should respond to isWorking", function() {
    expect(plane.isWorking).toBeDefined();
  });

  it("isWorking should be a function", function() {
    expect(plane.isWorking).toEqual(jasmine.any(Function));
  });
});
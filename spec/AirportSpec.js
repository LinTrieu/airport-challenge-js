describe('Airport', function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  it('airport exists', function(){
    expect(airport).toEqual(jasmine.any(Airport));
  });

  it('defaults to empty hangar', function(){
    expect(airport.hangar).toEqual([]);
  });

  it('can have a populated hangar', function(){
    airport2 = new Airport(['im a plane'])
    expect(airport2.hangar).toEqual(['im a plane']);
  });

  it('has a default capacity', function(){
    expect(airport.capacity).toEqual(20);
  });

  it('has a capacity injected', function(){
    airport2 = new Airport([], 50)
    expect(airport2.capacity).toEqual(50);
  });

  it('has a default weather checker', function(){
    expect(airport.weatherChecker).toEqual(jasmine.any(Weather));
  });

  it('can have weather checker injected', function() {
    airport2 = new Airport([],20, "im a weather checker")
    expect(airport2.weatherChecker).toEqual("im a weather checker");
  });

  it('can land a plane in the hangar', function() {
    airport.land('plane')
      expect(airport.hangar.indexOf('plane')).toBeGreaterThan(-1);
  });
});

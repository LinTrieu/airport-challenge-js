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

});

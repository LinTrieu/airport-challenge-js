describe('Airport', function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  it('airport exists', function(){
    expect(airport).toEqual(jasmine.any(Airport));
  });
});

describe('Airport', function() {
  var airport;
  beforeEach(function(){
    airport = new Airport;
  });
  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([])
  });
  // it('should not takeoff plane if weather is stormy', function() {
  //   expect(airport.isStormy()).toBeTruthy();
  //   expect(airport.docked(plane)).toBeTruthy();
  // });
});

describe('Plane', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding']);
  });

  it("can land at the Airport", function() {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });
  // it("should depart from the Airport", function() {
  //   plane.land();
  //   expect(plane.depart).not.toBeUndefined()
  // });
});

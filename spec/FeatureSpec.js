'use strict';

describe('Feature Test:', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('should land at the Airport', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
  it('should depart from the Airport', function() {
    plane.land(airport);
    plane.depart(airport);
    expect(airport.planes()).not.toContain(plane);
  });
});

'use strict';

describe('Plane', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding', 'clearForDeparture']);
  });

  it('can land at the Airport', function() {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });
  it('should depart from the Airport', function() {
    plane.land(airport);
    plane.depart(airport);
    expect(airport.clearForDeparture).toHaveBeenCalled();
  });
});

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

  describe('under stormy conditions', function()){

    it('blocks departure when weather is stormy', function() {
    plane.land(airport);
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){ plane.depart(); }).toThrowError('cannot depart during a storm');
    expect(airport.planes()).toContain(plane);
    });
  });
});

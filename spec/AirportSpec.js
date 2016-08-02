'use strict';

describe('Airport', function() {
  var airport;
  var plane;
  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });
  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([])
  });
  it('can clear planes for landing', function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });
  it('can clear planes for departure', function() {
    airport.clearForLanding(plane);
    airport.clearForDeparture(plane);
    expect(airport.planes()).toEqual([]);
  });
  // it('should not takeoff plane if weather is stormy', function() {
  //   expect(airport.isStormy()).toBeTruthy();
  //   expect(airport.docked(plane)).toBeTruthy();
  // });
});

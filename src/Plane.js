'use strict';

function Plane() {}

Plane.prototype.land = function(airport) {
  airport.clearForLanding(this);
};
Plane.prototype.depart = function(airport) {
  airport.clearForDeparture(this);
};

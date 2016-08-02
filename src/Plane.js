'use strict';

function Plane() {}

Plane.prototype.land = function(airport) {
  airport.clearForLanding(this);
  this._location = airport;
};

Plane.prototype.depart = function(airport) {
  airport.clearForDeparture(this);
  this._location.clearForDeparture('');
};

'use strict';

function Airport() {
  this._hangar = [];
}

Airport.prototype.planes = function(){
  return this._hangar;
};

Airport.prototype.clearForLanding = function(plane) {
  this._hangar.push(plane);
};

Airport.prototype.clearForDeparture = function(plane) {
  if(this.isStormy()) {
    throw new Error('cannot depart during a storm');
  }
  this._hangar = [];
};

Airport.prototype.isStormy = function() {
  return false;
};

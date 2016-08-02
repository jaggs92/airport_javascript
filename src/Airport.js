'use strict';

function Airport() {
  this._hangar = [];
}

Airport.prototype.planes = function(){ return this._hangar; };

Airport.prototype.clearForLanding = function(plane) {
  this._hangar.push(plane);
};
Airport.prototype.clearForDeparture = function(plane) {
  this._hangar = [];
};
//   if (this.isStormy) {
//     throw new Error("Cannot takeoff because the weather sucks");
//     plane.isLanded = true;
//   }
// };
//
// Airport.prototype.isStormy = function() {
//   this.isStormy = true;
// };

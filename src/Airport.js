'use strict';

function Airport() {}

Airport.prototype.planes = function() { return []; };

Airport.prototype.clearForLanding = function(plane) {}
//   if (this.isStormy) {
//     throw new Error("Cannot takeoff because the weather sucks");
//     plane.isLanded = true;
//   }
// };
//
// Airport.prototype.isStormy = function() {
//   this.isStormy = true;
// };

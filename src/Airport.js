const defaultCapacity = 20

function Airport(hangar = [], capacity = defaultCapacity, weatherChecker = new Weather()) {
  this.hangar = hangar;
  this.capacity = capacity;
  this.weatherChecker = weatherChecker;
};

Airport.prototype.land = function (plane) {
  this.hangar.push(plane);
};

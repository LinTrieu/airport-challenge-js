const defaultCapacity = 20

function Airport(hangar = [], capacity = defaultCapacity) {
  this.hangar = hangar;
  this.capacity = capacity;
};

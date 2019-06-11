function Weather() {};

Weather.prototype.isStormy = function() {
  var items = [true,false,false,false];
  var result = Math.floor(Math.random() * items.length );
  console.log(result);
  return items[result];
};

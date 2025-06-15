var _ = require('underscore');

var numbers = [1, 2, 3, 4, 5];
_.each(numbers, function(value, index){
console.log(value, index);
});
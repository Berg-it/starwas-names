var uniqueRandomArray = require('unique-random-array');
var starWarsName = require('../startWarsName.json');

module.exports = {

all:starWarsName,
random:uniqueRandomArray(starWarsName)

};
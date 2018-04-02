var expect = require('chai').expect;

var starWars = require('./index');

describe('startwars-names', function () {
	describe('all', function () {

		it('starwars all Should be an array of strings', function (){
			
			expect(starWars.all).to.satisfy(isArrayOfStrings);

			function isArrayOfStrings(array) {
				return array.every(function(item) {
					return typeof item == 'string';
				});
			}
		});


		// Lumiya
		it('Should contains Lumiya', function (){		
			expect(starWars.all).to.include("Lumiya");
		});
	});


	describe('random', function () {

		it('should return a random item rom starWars.all', function () {
			var randomItem = starWars.random();
			expect(starWars.all).to.include(randomItem);
		});
	});
});
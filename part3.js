var empty_object = {};

var stooge = {
	"first-name": "bruce",
	"last-name": "zhu"
};


var flight = {
	airline: "Oceanic",
	number: 815,
	departure: {
		IATA: "SYD",
		time: "2015-10-04",
		city: "Sydney"
	},
	arrival: {
		IATA: "LAX",
		time: "2015-10-03",
		city: "Suzhou"
	}
};

console.log(stooge["first-name"]);
console.log(stooge["middle-name"]);

var middle = stooge["middle-name"] || "(none)";
console.log(middle);

//console.log(flight.equipment.model);

var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;

console.log(nick);

if (typeof Object.beget !== 'function') {
	Object.create = function(o) {
		var F = function () {};
		F.prototype = o;
		return new F();
	};
}


var another_stooge = Object.create(stooge);
console.log(another_stooge);

another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = 'Moe';

stooge.profession = 'actor';
console.log(another_stooge.profession);

console.log(typeof flight.number);

var name;

console.log("------------");
for (name in another_stooge) {
	console.log(name + ': ' + another_stooge[name]);
}

console.log(another_stooge.nickname);
delete another_stooge.nickname;
console.log(another_stooge.nickname);







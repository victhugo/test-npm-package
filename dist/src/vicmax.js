'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = vicmax;
// 1.si la palara termina en 'ar', se quitan esta
// 2.si l aplabra inicia con Z , al final se le agrega 'pe'
// 3.si la palabra traducida tine 10 o mas letras,
// de bebe partir a la mitad y unir con guion -
// 4. si la palabra es un palindromo, no se aplican las reglas
// y se devulve la misma palabra intercalando minus y mayus

function vicmax(str) {
	var translation = str;

	// 4. Si l apalabra orignal es un palindromo ,
	// ninguna regla cuenta y se devuelve
	// la misma palabra alternando minu y mayus

	var reverse = function reverse(str) {
		return str.split('').reverse().join('');
	}; //split('') lo sepera por carateres, join('') lo junta

	function minMay(str) {
		var length = str.length;
		var translation = '';
		var capitalize = true;
		for (var i = 0; i < length; i++) {
			var char = str.charAt(i);
			translation += capitalize ? char.toUpperCase() : char.toLowerCase();
			capitalize = !capitalize;
		}
		return translation;
	}

	if (str == reverse(str)) {
		return minMay(str);
	}

	// 1. Si la palabra termina en "ar", se quitan estos dos caracteres
	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2);
	}

	// 2. Si la palabra inicia con Z se le agrega "pe" al final
	if (str.toLowerCase().startsWith('z')) {
		translation += 'pe';
	}

	// 3. Si la palabra traducida tiene 10 o mas letras
	// se debe partir a la mitad y unir con guion medio
	var length = translation.length;
	if (length >= 10) {
		var firsHalf = translation.slice(0, Math.round(length / 2));
		var secondHalf = translation.slice(Math.round(length / 2)); // si no le mandamos parametro sera hasta el final
		translation = firsHalf + '-' + secondHalf;
	}
	return translation;
}
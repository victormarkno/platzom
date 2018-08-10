'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzom;
function platzom(str) {
	var translation = str;
	//si la palabra es palindromo se devuelve la misma palabra 
	//intercalando minusculas y mayusculas
	var reverse = function reverse(str) {
		return str.split('').reverse().join('');
	};
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
	// si la palabra termina en "ar" se le quitan esos dos caracacteres
	//se transforma a miniscula todo en primera instancia //toLowerCase
	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2);
	}
	//si inicia con z se a;ade 'pe' al final
	if (str.toLowerCase().startsWith('z')) {
		translation += 'pe';
	}

	//si la plabra traducida tiene 10 o mas letras se debe unir con un guion
	var length = translation.length;
	if (length >= 10) {
		var firstHalf = translation.slice(0, Math.round(length / 2));
		var secondHalf = translation.slice(Math.round(length / 2));
		translation = firstHalf + '-' + secondHalf;
	}
	return translation;
}
export default function platzom(str) {
	let translation = str
	//si la palabra es palindromo se devuelve la misma palabra 
	//intercalando minusculas y mayusculas
	const reverse = (str) => str.split('').reverse().join('')
	function minMay(str){
		const length = str.length
		let translation = ''
		let capitalize = true
		for (let i=0; i<length;i++){
			const char = str.charAt(i)
			translation += capitalize ? char.toUpperCase():char.toLowerCase()
			capitalize=!capitalize
		}
		return translation
	}
	if(str == reverse(str)){
		return minMay(str)
	}
	// si la palabra termina en "ar" se le quitan esos dos caracacteres
	//se transforma a miniscula todo en primera instancia //toLowerCase
	if(str.toLowerCase().endsWith('ar')){
		translation = str.slice(0,-2);
	}
	//si inicia con z se a;ade 'pe' al final
	if(str.toLowerCase().startsWith('z')){
		translation += 'pe';
	}
	
	//si la plabra traducida tiene 10 o mas letras se debe unir con un guion
	const length = translation.length
	if(length>= 10){
		const firstHalf = translation.slice(0,Math.round(length/2))
		const secondHalf = translation.slice(Math.round(length/2))
		translation = `${firstHalf}-${secondHalf}`
	}
	return translation;
	
	
}
const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function(){
	it('Si la palabra es palindromo se devuelve la misma palabra intercalada minuscula y mayuscula', function(){
		const translation = platzom('sometemos')
		expect(translation).to.equal('SoMeTeMoS')
	}),

	it('si inicia con z se annade "pe" al final', function(){ 
		const translation = platzom('zorro')
		const translation2 = platzom('zarpar')

		expect(translation).to.equal('zorrope')
		expect(translation2).to.equal('zarppe')
	}),

	it('Si la palabra termina en "ar" se le quitan esos dos caracacteres',function(){ 
		const translation = platzom('programar')
		expect(translation).to.equal('program')
	}),

	it('si la plabra traducida tiene 10 o mas letras se debe unir con un guion',function(){
		const translation = platzom("abecedario")
		expect(translation).to.equal('abece-dario')
	})
})
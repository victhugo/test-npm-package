const expect = require('chai').expect
const vicmax = require('..').default

describe('#vicmax', function () {

	it('Si la palabra termina en <ar>, se quitan estos dos caracteres', function () {
		const translation = vicmax("Programar")
		expect(translation).to.equal("Program")
	})
	it('Si la palabra inicia con Z se le agrega <pe> al final', function () {
		const translation = vicmax("Zorro")
		const translation2 = vicmax("Zarpar")

		expect(translation).to.equal("Zorrope")
		expect(translation2).to.equal("Zarppe")
	})
	it('Si la palabra traducida tiene 10 o mas letras se debe partir a la mitad y unir con guion medio', function () {
		const translation = vicmax("abecedario")
		expect(translation).to.equal("abece-dario")
	})
	it('Si la palabra es un palindromo, no se aplican las reglas y se devulve la misma palabra intercalando minus y mayus', function () {
		const translation = vicmax("sometemos")
		expect(translation).to.equal("SoMeTeMoS")
	})
})

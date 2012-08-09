
var categoryData = {
	estaciones: {
		name: "Estaciones",
		description: "Busca tu estaci&oacute;n",
		items: [
		{ name: "Naranjal", address: "Av. T&uacute;pac Amaru cdra 45 con Av. Chinchaysuyo cdra 1 - Independencia", coordinatelat: "-11.982013", coordinatelng: "-77.058663", },
		{ name: "Izaguirre", address: "Av. T&uacute;pac Amaru cdra 37 con Av. C Izaguirre cdra 1 - Independencia", coordinatelat: "-11.988667", coordinatelng: "-77.056915", },
		{ name: "Pacifico", address: "Av. T&uacute;pac Amaru cdra 35 con Av. Pac&iacute;fico cdra 1 - Independencia", coordinatelat: "-11.994166", coordinatelng: "-77.056207", },
		{ name: "Independencia", address: "Av. T&uacute;pac Amaru cdra 33 con Av. Los Pinos cdra 1 - Independencia", coordinatelat: "-11.997383", coordinatelng: "-77.055225", },
		{ name: "Jazmines", address: "Av. T&uacute;pac Amaru cdra 72 con Av. Los Jazmines cdra 1 - Independencia", coordinatelat: "-12.002236", coordinatelng: "-77.054719", },
		{ name: "Tomas Valle", address: "Av. T&uacute;pac Amaru con Av. Tom&aacute; cdra 1 - Independencia", coordinatelat: "-12.007316", coordinatelng: "-77.053793", },
		{ name: "El Milagro", address: "Av. T&uacute;pac Amaru cdra 14 con Av. Bartolom&eacute; cdra 1 - San Mart&iacute;n de Porres/Independencia", coordinatelat: "-12.010883", coordinatelng: "-77.053041", },
		{ name: "Honorio Delgado", address: "Av. T&uacute;pac Amaru cdra 8 con Av. - Honorio Delgado cdra 1 - San Mart&iacute;n de Porres/Independencia", coordinatelat: "-12.018145", coordinatelng: "-77.051475", },
		{ name: "UNI", address: "Av. T&uacute;pac Amaru cdra 2 - San Mart&iacute;n de Porres/R&iacute;mac", coordinatelat: "-12.023329", coordinatelng: "-77.049930", },
		{ name: "Parque del Trabajo", address: "Av. Caquet&aacute; cdra 7 con Ant&oacute;n S&aacute;nchez cdra 1 - San Mart&iacute;n de Porres/R&iacute;mac", coordinatelat: "-12.030884", coordinatelng: "-77.044158", },
		{ name: "Caqueta", address: "Av. Caquet&aacute; cdra 1 con Av. Zarumilla cdra 1 - San Mart&iacute;n de Porres/R&iacute;mac", coordinatelat: "-12.036467", coordinatelng: "-77.043621", },
		{ name: "Ramon Castilla", address: "Av. Emancipaci&oacute;n cdra 9 con Jr. Tayacaja cdra 6, Cercado de Lima", coordinatelat: "-12.043373", coordinatelng: "-77.042721", },
		{ name: "2 de Mayo", address: "Av. Alfonso Ugarte cdra 4 y 5 con Plaza Dos de Mayo, Cercado de Lima", coordinatelat: "-12.046330", coordinatelng: "-77.042785", },
		{ name: "Quilca", address: "Av. Alfonso Ugarte cdra 9 con Jr. Pomabamba, Breña/Cercado de Lima", coordinatelat: "-12.050862", coordinatelng: "-77.042377", },
		{ name: "España", address: "Av. Alfonso Ugarte cdra 13 con Av. República de Portugal, Breña/Cercado de Lima", coordinatelat: "-12.058138", coordinatelng: "-77.041765", },
		{ name: "Tacna", address: "Av. Emancipaci&oacute;n cdra 4 y 5 con Av. Tacna cdra 5, Cercado de Lima", coordinatelat: "-12.04633", coordinatelng: "-77.037445", },
		{ name: "Jiron de la Union", address: "Av. Emancipaci&oacute;n cdra 1 Jr. de la Uni&oacute;n cdra 6, Cercado de Lima", coordinatelat: "-12.049050", coordinatelng: "-77.033110", },
		{ name: "Colmena", address: "Av. Nicol&aacute;s de Pi&eacute;rola (Colmena) cdra 11 con Jr. Lampa cdra 9, Cercado de Lima", coordinatelat: "2.052725", coordinatelng: "-77.033097", },
		{ name: "Central", address: "Parque Los H&eacute;roes Navales con Av. Paseo de la Re&uacte;blica 170, Cercado de Lima", coordinatelat: "-12.057756,-77.035983", },
		{ name: "Estadio Nacional", address: "Av. Paseo de la Rep&uacute;blica cdra 9 con Puente Peatonal, Cercado de Lima/La Victoria", coordinatelat: "-12.068615", coordinatelng: "-77.032185", },
		{ name: "Mexico", address: "Av. Paseo de la Rep&uacute;blica cdra 13 con Puente M&eacute;xico, Cercado de Lima/La Victoria", coordinatelat: "-12.076835", coordinatelng: "-77.028837", },
		{ name: "Canada", address: "Av. Paseo de la Rep&uacute;blica cdra 19 con Puente Canad&aacute;, Lince/La Victoria", coordinatelat: "-12.082416", coordinatelng: "-77.026531", },
		{ name: "Javier Prado", address: "Av. Paseo de la Rep&uacute;blica cdra 28 con Puente Javier Prado, San Isidro", coordinatelat: "-12.090815", coordinatelng: "-77.022888", },
		{ name: "Canaval y Moreira", address: "Av. Paseo de la Rep&uacute;blica cdra 32 con Puente Canaval y Moreira, San Isidro", coordinatelat: "-12.096784", coordinatelng: "-77.025071", },
		{ name: "Aramburu", address: "Av. Paseo de la Rep&uacute;blica cdra 37 con Puente Arambur&uacute;, San Isidro", coordinatelat: "-12.102821", coordinatelng: "-77.027336", },
		{ name: "Domingo Orue", address: "Av. Paseo de la Rep&uacute;blica cdra 43 con Puente Domingo Oru&eacute, San Isidro", coordinatelat: "-12.108596", coordinatelng: "-77.026386", },
		{ name: "Angamos", address: "Av. Paseo de la Rep&uacute;blica cdra 48 con Puente Angamos, San Isidro", coordinatelat: "-12.113484", coordinatelng: "-77.025983", },
		{ name: "Ricardo Palma", address: "Av. Paseo de la Rep&uacute;blica cdra 55 con Puente Ricardo Palma, Miraflores/Surquillo", coordinatelat: "-12.119123", coordinatelng: "-77.025871", },
		{ name: "Benavides", address: "Av. Paseo de la Rep&uacute;blica cdra 59 con Puente Benavides, Miraflores", coordinatelat: "-12.125338", coordinatelng: "-77.024138", },
		{ name: "28 de julio", address: "Av. Paseo de la Rep&uacute;blica cdra 61 con Puente Miraflores, Miraflores", coordinatelat: "-12.129586", coordinatelng: "-77.022786", },
		{ name: "Plaza de Flores", address: "Av. Rosendo Vidaurre cdra 5 y 6, Barranco", coordinatelat: "-12.135965", coordinatelng: "-77.018433", },
		{ name: "Balta", address: "Av. Rep&uacte;blica de Panam&aacute; (Bolognesi) cdra 10 con &Oacute;valo Balta, Barranco", coordinatelat: "-12.141722", coordinatelng: "-77.017797", },
		{ name: "Bulevar", address: "Av. Rep&uacte;blica de Panam&aacute; (Bolognesi) cdra 3 con calle Juan Pazos, Barranco", coordinatelat: "-12.148067", coordinatelng: "-77.020061", },
		{ name: "Estadio Union", address: "Av. Escuela Militar cdra 2 con Pasaje Anaya, Barranco", coordinatelat: "-12.152736", coordinatelng: "-77.019734", },
		{ name: "Escuela Militar", address: "Av. Escuela Militar cdra 8, Chorrillos", coordinatelat: "-12.160800", coordinatelng: "-77.019128", },
		{ name: "Teran", address: "Av. Prolongaci&oacute;n Paseo de la Rep&uacte;blica cdra 1 con Av. Fernando Ter&aacute;n cdra 8, Chorrillos", coordinatelat: "-12.168325", coordinatelng: "-77.018795", },
		{ name: "Rosario de Villa", address: "Av. Prolongaci&oacute;n Paseo de la Rep&uacte;blica cdra 8 con Jr. Costa Azul, Chorillos", coordinatelat: "-12.173512", coordinatelng: "-77.014761", },
		{ name: "Matellini", address: "Av. Prolongaci&oacute;n Paseo de la Rep&uacte;blica cdra 18 con Av. Ariosto Matellini, Chorillos", coordinatelat: "-12.178996", coordinatelng: "-77.009783", },
		]
	},
};


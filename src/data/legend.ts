export interface LegendPart {
	id: string;
	title: string;
	text: string[];
}

export interface Legend {
	lang: 'es' | 'en';
	title: string;
	intro: string;
	parts: LegendPart[];
	epilogue: string;
}

export const legendEs: Legend = {
	lang: 'es',
	title: 'La leyenda de la Mujer Muerta',
	intro:
		'No se preocupe por el menú: primero déjese seducir por la montaña que custodia nuestros platos.',
	parts: [
		{
			id: 'prologo',
			title: 'Prólogo',
			text: [
				'Muchas son las leyendas que narran la aparición de la silueta de una mujer, una mujer que parece dormida, con los brazos cruzados entre sí.',
				'Descansa en la parte segoviana de la sierra de Guadarrama formada por los picos La Pinareja, Peña del Oso y El Pico Pasapán.',
				'En primavera, luciendo verde su imponente figura. En invierno, arropada por un manto blanco sutilmente colocado por las nubes pasajeras.',
				'De entre todas las leyendas la siguiente es la que escojo.',
			],
		},
		{
			id: 'introduccion',
			title: 'Introducción',
			text: [
				'Cuenta la leyenda que hace mucho tiempo atrás existió una hermosa mujer, de corazón humilde, fuerte y valerosa.',
				'Era cortejada por un apuesto caballero, de facha impecable, militar de carrera y una fama irreprochable.',
				'Un buen día, por el pueblo apareció un muchacho de aspecto jovial, alegre y risueño.',
				'Cautivó a la dama con hechos, más que con palabras y demostró su valía para por siempre amarla.',
			],
		},
		{
			id: 'nudo',
			title: 'Nudo',
			text: [
				'El caballero lleno de ira y de celos retó a muerte al muchacho por el honor que sentía ultrajado. Se dieron cita al atardecer, a los pies de la montaña, para sentenciar con acero la disputa que les relacionaba.',
				'Enteróse la joven, fue en busca de los guerreros y al encontrarlos, un grito desgarrador clamó al cielo.',
				'Halló a su amado herido de muerte en el suelo.',
				'El militar embebido por los celos descubrió su daga y clavándosela a la dama en el pecho la dejó muerta en ese mismo momento.',
			],
		},
		{
			id: 'desenlace',
			title: 'Desenlace',
			text: [
				'Ambas familias crearon conflictos en el pueblo —¡Tú mataste a mi hija! ¡No eras su amor verdadero!',
				'Entre tanta disputa una gran tormenta surgió del cielo y con ella una voz sensata que puso fin a este suceso.',
				'—¡Miserables! ¡Sois todos unos egoístas que os dejáis llevar por pasiones y celos! ¡Solo ella era inocente! ¡Desapareceréis sin remedio! ¡Pero ella tendrá una tumba que quedará para siempre en el recuerdo!',
				'En ese mismo instante se elevaron las montañas sepultando en la tierra tanto odio, tanta ira, tanta rabia y tantos celos, dando lugar a la MUJER MUERTA, la silueta de una joven que murió por todos ellos.',
			],
		},
	],
	epilogue:
		'Desde la sierra, la Mujer Muerta vigila Segovia. Dejamos que su historia acompañe su mesa mientras disfruta de la nuestra.',
};

export const legendEn: Legend = {
	lang: 'en',
	title: 'The Legend Of The Dead Woman',
	intro: 'Enjoy our menu while the mountain that watches over Segovia tells you a story.',
	parts: [
		{
			id: 'prologue',
			title: 'Prologue',
			text: [
				'There are many folktales about the origins of the silhouette of a woman who appears to be sleeping, lying on her back with her hands resting on her chest.',
				'You can see her resting on the Segovian side of the Sierra de Guadarrama with the three peaks known as the Pinareja, Peña del Oso and the Pasapán Peak.',
				'During the spring time her imposing figure is dressed in green. And during the winter, you will see her keeping warm under a white blanket the clouds extend as they pass by.',
				'Among the many stories that tell us about her, this is my favorite.',
			],
		},
		{
			id: 'introduction',
			title: 'Introduction',
			text: [
				'The story goes that a long, long time ago there was a beautiful, strong and courageous woman, with a humble heart.',
				'She was courted by a handsome knight, a true gentleman and a professional soldier, with an impeccable reputation.',
				'One day, a young, happy and jovial man arrived in the town. He seduced the beautiful woman with actions, rather than words, demonstrating his determination to love her for ever.',
			],
		},
		{
			id: 'junction',
			title: 'Junction',
			text: [
				'The knight, full of rage and jealousy, challenged the young man because he felt dishonored. They agreed to meet at dusk at the foot of the mountains in order to resolve their dispute with steel.',
				'The young woman found out and went looking for the soldiers. Upon finding them, a heartrending scream pierced the heavens.',
				'She found her beloved on the ground mortally wounded.',
				'The soldier, consumed by jealousy, took out his dagger and pierced the woman’s chest with it, killing her in the act.',
			],
		},
		{
			id: 'conclusion',
			title: 'Conclusion',
			text: [
				'Both families caused trouble in the town. —You killed my daughter! You weren’t her true love!',
				'In the middle of so much conflict a great storm broke out and a sensible voice was heard, putting an end to this dispute:',
				'Miserable people! You are selfish that let yourselves be ruled by passion and jealousy! She was the only innocent one! You will disappear without a trace! But she will have a tomb that will live on forever in memory!',
				'At this very moment the mountains rose up, burying all the hate, rage, and jealousy on the earth, creating the Mujer Muerta, the silhouette of the woman who died for all of them.',
			],
		},
	],
	epilogue:
		'The Mujer Muerta watches over Segovia from the sierra. Let her story accompany your table while you enjoy ours.',
};
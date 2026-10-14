import type { Lang } from './i18n';

export interface LegendPart {
	id: string;
	title: string;
	text: string[];
}

export interface Legend {
	lang: Lang;
	eyebrow: string;
	title: string;
	intro: string;
	parts: LegendPart[];
	epilogue: string;
}

export const legendEs: Legend = {
	lang: 'es',
	eyebrow: 'Un cuento entre plato y plato',
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
	eyebrow: 'A tale between courses',
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

export const legendFr: Legend = {
	lang: 'fr',
	eyebrow: 'Un conte entre deux plats',
	title: 'La légende de la Femme Morte',
	intro:
		'Savourez notre carte pendant que la montagne qui veille sur Ségovie vous raconte son histoire.',
	parts: [
		{
			id: 'prologo',
			title: 'Prologue',
			text: [
				"De nombreuses légendes racontent l'apparition de la silhouette d'une femme qui semble endormie, allongée sur le dos, les mains croisées sur la poitrine.",
				'Elle repose sur le versant ségovien de la Sierra de Guadarrama, formée par les pics La Pinareja, Peña del Oso et le Pic Pasapán.',
				"Au printemps, son imposante silhouette se pare de vert. En hiver, elle s'enveloppe d'un manteau blanc délicatement déposé par les nuages de passage.",
				'Parmi toutes les légendes qui nous parlent d\'elle, voici ma préférée.',
			],
		},
		{
			id: 'introduccion',
			title: 'Introduction',
			text: [
				"La légende raconte qu'il y a bien longtemps vivait une femme d'une grande beauté, au cœur humble, forte et courageuse.",
				"Elle était courtisée par un beau chevalier à l'allure impeccable, militaire de carrière et d'une réputation irréprochable.",
				"Un beau jour, un jeune homme à l'air jovial, gai et souriant apparut au village. Il séduisit la dame par ses actes plus que par ses paroles, prouvant sa détermination à l'aimer pour toujours.",
			],
		},
		{
			id: 'nudo',
			title: 'Nœud',
			text: [
				"Le chevalier, consumé par la colère et la jalousie, défia le jeune homme à mort pour laver son honneur qu'il estimait bafoué. Ils se donnèrent rendez-vous au crépuscule, au pied de la montagne, pour régler leur différend par le fer.",
				"La jeune femme l'apprit et partit à la recherche des combattants. Lorsqu'elle les trouva, un cri déchirant s'éleva vers le ciel.",
				'Elle découvrit son bien-aimé gisant au sol, mortellement blessé.',
				'Aveuglé par la jalousie, le soldat dégaina sa dague et la plongea dans la poitrine de la dame, la tuant sur-le-champ.',
			],
		},
		{
			id: 'desenlace',
			title: 'Dénouement',
			text: [
				'Les deux familles semèrent la discorde dans le village : — Tu as tué ma fille ! Tu n\'étais pas son véritable amour !',
				'Au milieu de tant de querelles, une violente tempête éclata dans le ciel et une voix pleine de sagesse mit fin à ce drame :',
				"— Misérables ! Vous n'êtes que des égoïstes gouvernés par vos passions et votre jalousie ! Elle seule était innocente ! Vous disparaîtrez sans laisser de trace, mais elle aura un tombeau qui restera à jamais gravé dans les mémoires !",
				"À cet instant précis, les montagnes s'élevèrent, ensevelissant tant de haine, de colère et de jalousie, donnant naissance à la FEMME MORTE (Mujer Muerta), la silhouette de la jeune femme qui mourut pour eux tous.",
			],
		},
	],
	epilogue:
		'Depuis la montagne, la Femme Morte veille sur Ségovie. Laissez son histoire accompagner votre table pendant que vous savourez la nôtre.',
};

export const legendIt: Legend = {
	lang: 'it',
	eyebrow: "Un racconto tra una portata e l'altra",
	title: 'La leggenda della Donna Morta',
	intro:
		'Godetevi il nostro menù mentre la montagna che veglia su Segovia vi racconta una storia.',
	parts: [
		{
			id: 'prologo',
			title: 'Prologo',
			text: [
				'Molte sono le leggende che narrano l\'apparizione della sagoma di una donna che sembra addormentata, distesa con le braccia incrociate sul petto.',
				'Riposa sul versante segoviano della Sierra de Guadarrama, formata dalle vette La Pinareja, Peña del Oso e il Picco Pasapán.',
				'In primavera, la sua imponente figura si veste di verde. In inverno, è avvolta da un manto bianco posato delicatamente dalle nuvole di passaggio.',
				'Tra tutte le leggende che parlano di lei, questa è la mia preferita.',
			],
		},
		{
			id: 'introduccion',
			title: 'Introduzione',
			text: [
				'Narra la leggenda che molto tempo fa vivesse una donna bellissima, dal cuore umile, forte e coraggiosa.',
				'Era corteggiata da un affascinante cavaliere dall\'aspetto impeccabile, militare di carriera e dalla fama irreprensibile.',
				"Un bel giorno arrivò in paese un giovane dall'aspetto gioviale, allegro e sorridente. Conquistò la dama con i fatti più che con le parole, dimostrando il suo valore per amarla per sempre.",
			],
		},
		{
			id: 'nudo',
			title: 'Intreccio',
			text: [
				'Il cavaliere, accecato dall\'ira e dalla gelosia, sfidò a morte il giovane per l\'onore che sentiva oltraggiato. Si diedero appuntamento al tramonto, ai piedi della montagna, per risolvere con l\'acciaio la loro contesa.',
				'La giovane lo venne a sapere e corse in cerca dei duellanti; quando li trovò, un grido straziante si levò al cielo.',
				'Trovò il suo amato a terra, ferito a morte.',
				'Il militare, divorato dalla gelosia, estrasse il pugnale e lo conficcò nel petto della dama, lasciandola senza vita in quello stesso istante.',
			],
		},
		{
			id: 'desenlace',
			title: 'Epilogo',
			text: [
				'Entrambe le famiglie scatenarono conflitti nel paese: — Hai ucciso mia figlia! Non eri il suo vero amore!',
				'Tra tante dispute, una grande tempesta si scatenò dal cielo e con essa una voce saggia pose fine all\'accaduto:',
				'— Miserabili! Siete tutti degli egoisti che si lasciano guidare dalle passioni e dalla gelosia! Solo lei era innocente! Scomparirete senza rimedio, ma lei avrà una tomba che resterà per sempre nella memoria!',
				'In quello stesso istante si innalzarono le montagne, seppellendo nella terra tanto odio, tanta ira e tanta gelosia, dando origine alla DONNA MORTA (Mujer Muerta), la sagoma di una giovane che morì per tutti loro.',
			],
		},
	],
	epilogue:
		'Dalla sierra, la Donna Morta veglia su Segovia. Lasciate che la sua storia accompagni la vostra tavola mentre gustate la nostra.',
};

export const legendPt: Legend = {
	lang: 'pt',
	eyebrow: 'Um conto entre prato e prato',
	title: 'A lenda da Mulher Morta',
	intro:
		'Desfrute da nossa carta enquanto a montanha que guarda Segóvia lhe conta uma história.',
	parts: [
		{
			id: 'prologo',
			title: 'Prólogo',
			text: [
				'Muitas são as lendas que narram a aparição da silhueta de uma mulher que parece adormecida, deitada com os braços cruzados sobre o peito.',
				'Descansa no lado segoviano da Serra de Guadarrama, formada pelos picos La Pinareja, Peña del Oso e o Pico Pasapán.',
				'Na primavera, a sua imponente figura veste-se de verde. No inverno, é agasalhada por um manto branco subtilmente colocado pelas nuvens passageiras.',
				'De entre todas as lendas que falam dela, esta é a que escolho.',
			],
		},
		{
			id: 'introduccion',
			title: 'Introdução',
			text: [
				'Conta a lenda que há muito tempo existiu uma bela mulher, de coração humilde, forte e corajosa.',
				'Era cortejada por um elegante cavaleiro, de porte impecável, militar de carreira e de fama irrepreensível.',
				'Um belo dia, apareceu na aldeia um rapaz de aspeto jovial, alegre e risonho. Cativou a dama com atos, mais do que com palavras, demonstrando o seu valor para a amar para sempre.',
			],
		},
		{
			id: 'nudo',
			title: 'Desenvolvimento',
			text: [
				'O cavaleiro, cheio de ira e de ciúmes, desafiou o rapaz para um duelo até à morte pela honra que sentia ultrajada. Marcaram encontro ao entardecer, no sopé da montanha, para decidir com o aço a disputa que os opunha.',
				'A jovem soube do sucedido e foi em busca dos guerreiros; ao encontrá-los, um grito dilacerante ecoou pelos céus.',
				'Encontrou o seu amado ferido de morte no chão.',
				'O militar, cego pelos ciúmes, desembainhou a sua adaga e, cravando-a no peito da dama, tirou-lhe a vida naquele mesmo instante.',
			],
		},
		{
			id: 'desenlace',
			title: 'Desfecho',
			text: [
				'Ambas as famílias geraram conflitos na aldeia: — Mataste a minha filha! Não eras o seu amor verdadeiro!',
				'No meio de tanta disputa, uma grande tempestade surgiu do céu e, com ela, uma voz sensata pôs fim a este acontecimento:',
				'— Miseráveis! Sois todos uns egoístas que se deixam levar por paixões e ciúmes! Só ela era inocente! Desaparecereis sem remédio, mas ela terá um túmulo que ficará para sempre na memória!',
				'Nesse mesmo instante ergueram-se as montanhas, sepultando na terra tanto ódio, tanta ira e tantos ciúmes, dando origem à MULHER MORTA (Mujer Muerta), a silhueta de uma jovem que morreu por todos eles.',
			],
		},
	],
	epilogue:
		'Desde a serra, a Mulher Morta vigia Segóvia. Deixamos que a sua história acompanhe a sua mesa enquanto desfruta da nossa.',
};

export const legends: Record<Lang, Legend> = {
	es: legendEs,
	en: legendEn,
	fr: legendFr,
	it: legendIt,
	pt: legendPt,
};

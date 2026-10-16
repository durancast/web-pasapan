export interface DrinkGroup {
	label: string;
	items: { name: string; price: number; note?: string }[];
}

export interface DrinkCategory {
	id: string;
	title: string;
	groups: DrinkGroup[];
}

export const wines: DrinkCategory[] = [
	{
		id: 'espumosos',
		title: 'Champagne, Corpinnat y Cavas',
		groups: [{ label: 'D.O. Corpinnat', items: [{ name: 'Mosset Brut Nature', price: 24 }] }],
	},
	{
		id: 'blancos',
		title: 'Blancos',
		groups: [
			{
				label: 'Vino ecológico',
				items: [
					{ name: 'Redreja Blanco Ecológico', price: 16.5 },
					{ name: 'Microbio', price: 24 },
				],
			},
			{
				label: 'D.O. Rueda',
				items: [
					{ name: 'Ukelele (Verdejo)', price: 16.5 },
					{ name: 'Erre (Verdejo)', price: 16.8 },
					{ name: '921 Cr Lias Viñas Viejas (Verdejo)', price: 18.9 },
					{ name: 'Palacio de Bornos (Frizzante)', price: 16.9 },
				],
			},
			{ label: 'D.O. Rias Baixas', items: [{ name: 'O Fillo da Condesa (Albariño)', price: 22.2 }] },
			{ label: 'D.O. Somontano', items: [{ name: 'Enate Chardonnay 234', price: 22.8 }] },
			{ label: 'D.O. Bierzo', items: [{ name: 'Polvorete (Godello)', price: 24.5 }] },
		],
	},
	{
		id: 'rosados',
		title: 'Rosados',
		groups: [
			{ label: 'D.O. Valtiendas', items: [{ name: 'Redreja Rosado', price: 16.5 }] },
			{ label: 'D.O. Cigales', items: [{ name: 'Malvanegra', price: 16.5 }] },
		],
	},
	{
		id: 'tintos',
		title: 'Tintos',
		groups: [
			{
				label: 'D.O. Ribera del Duero',
				items: [
					{ name: 'Mogar', price: 19.5 },
					{ name: '912 Altitud', price: 19.5 },
					{ name: 'Viña Sastre', price: 21.5 },
					{ name: 'El Sitio de Valdehermoso', price: 19.9 },
					{ name: 'Celestina', price: 24 },
					{ name: 'Carmelo Rodero', price: 24 },
					{ name: 'Laderas del Norte', price: 25.5 },
					{ name: 'Parada de Atauta', price: 32.9 },
					{ name: 'Valderiz', price: 32 },
					{ name: 'Tres Mano', price: 40 },
				],
			},
			{
				label: 'D.O. Rioja',
				items: [
					{ name: 'Ramón Bilbao Crianza', price: 22.8 },
					{ name: 'Ramón Bilbao Edición Limitada', price: 27 },
					{ name: 'Ramón Bilbao Reserva', price: 30.6 },
					{ name: 'Piérola Crianza', price: 22.5 },
				],
			},
			{ label: 'D.O. Valtiendas', items: [{ name: 'Tinto Redreja', price: 16.5 }] },
			{ label: 'D.O. Toro', items: [{ name: 'Románico', price: 22.5 }] },
			{
				label: 'D.O. Jumilla',
				items: [
					{ name: 'Juan Gil Amarillo', price: 18 },
					{ name: 'Juan Gil Plata', price: 22.5 },
				],
			},
			{ label: 'D.O. Campo de Borja', items: [{ name: 'Flor de Morca', price: 18 }] },
			{
				label: 'Vinos de la Tierra de Castilla y León',
				items: [
					{ name: 'Gota de Arena', price: 18 },
					{ name: 'Entresuelos', price: 18.3 },
				],
			},
			{ label: 'D.O. Somontano', items: [{ name: 'Enate Cabernet-Merlot', price: 19.6 }] },
			{ label: 'D.O. Bierzo', items: [{ name: 'Mencía Cuatro Pasos', price: 18 }] },
		],
	},
];

export const beers: DrinkCategory[] = [
	{
		id: 'cervezas',
		title: 'Carta de Cervezas',
		groups: [
			{
				label: 'Cervezas Industriales',
				items: [
					{ name: 'Caña Águila', price: 1.9 },
					{ name: 'Doble Águila', price: 3.2 },
					{ name: 'El Águila 1/3', price: 3.2 },
					{ name: 'Copa Águila', price: 3.8 },
					{ name: 'Caña Amstel Oro', price: 2.3 },
					{ name: 'Doble Amstel Oro', price: 3.3 },
					{ name: 'Copa Amstel Oro', price: 4 },
					{ name: 'Caña Heineken 0,0', price: 2.2 },
					{ name: 'Doble Heineken 0,0', price: 3.4 },
					{ name: 'Copa Heineken 0,0', price: 3.8 },
					{ name: 'Águila Sin Filtrar 1/3', price: 3.2 },
					{ name: 'Amstel Radler 1/3', price: 3.5 },
					{ name: 'Cruz Campo Sin Gluten 1/3', price: 3.5 },
					{ name: 'Amstel Oro 0,0 Tostada 1/3', price: 3.5 },
					{ name: '18/70 La Rubia', price: 3.5 },
					{ name: 'Amstel Oro 1/3', price: 3.5 },
				],
			},
			{
				label: 'Cervezas Artesanas · Hechas en Segovia',
				items: [
					{ name: 'San Frutos Lager 1/3 (German Pils)', note: 'Segovia', price: 3.9 },
					{ name: 'San Frutos Especial 1/3 (Amber Ale)', note: 'Segovia', price: 3.9 },
					{ name: 'San Frutos IPA 1/3 (Indian Pale Ale)', note: 'Segovia', price: 4.2 },
					{ name: 'Oro Negro 1/3 (Russian Imperial Stout)', note: 'Segovia', price: 4.5 },
				],
			},
		],
	},
];

export const juices: DrinkCategory[] = [
	{
		id: 'zumos',
		title: 'Zumos Naturales y Kombuchas',
		groups: [
			{
				label: 'Zumos Naturales y Limonada',
				items: [
					{ name: 'Creatividad (naranja, zanahoria y jengibre)', price: 3.5 },
					{ name: 'Atracción (fresa, frambuesa y arándanos)', price: 3.5 },
					{ name: 'Confianza (fresa, naranja y hierbabuena)', price: 3.5 },
					{ name: 'Limonada natural', price: 3.5 },
				],
			},
			{
				label: 'Kombuchas',
				items: [
					{ name: 'Original', price: 3.5 },
					{ name: 'Cítricos & Albahaca', price: 3.5 },
					{ name: 'Frambuesa & Hibisco', price: 3.5 },
					{ name: 'Piña & Hierbabuena', price: 3.5 },
				],
			},
		],
	},
];

export const drinkCatalog = [
	{ id: 'vinos', title: 'Carta de Vinos, Champagne, Corpinnat y Cavas', anchor: 'vinos', categories: wines },
	{ id: 'cervezas', title: 'Carta de Cervezas', anchor: 'cervezas', categories: beers },
	{ id: 'zumos', title: 'Carta de Zumos Naturales y Kombuchas', anchor: 'zumos', categories: juices },
];
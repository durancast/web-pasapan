export const site = {
	lang: 'es',
	title: 'Restaurante Pasapán · Cocina tradicional del siglo XXI',
	name: 'Restaurante Pasapán',
	tagline: 'Cocina tradicional del siglo XXI · Segovia',
	description:
		'Restaurante en el casco histórico de Segovia. Cocina tradicional, artesana y creativa con producto de proximidad. Reservas y pedidos online.',
	url: 'https://restaurantepasapan.es',
	address: {
		street: 'C/ Colón, 5',
		postalCode: '40001',
		city: 'Segovia',
		country: 'España',
		countryCode: 'ES',
	},
	phone: { display: '921 70 10 06', tel: '+34921701006' },
	email: 'info@restaurantepasapan.es',
	hours: [
		{ day: 'Martes a Domingo', label: '12,00h a 16,00h', start: '12:00', end: '16:00' },
		{ day: 'Martes a Domingo', label: '20,00h a 00,00h', start: '20:00', end: '00:00' },
	],
	reservationsUrl: 'https://restaurantepasapan.myrestoo.net/es/reservar',
	ordersUrl: 'https://cloudclient28.hiopos.com/portalrest/#/',
	ordersUrlFallback: 'https://www.portalrest.com/index.html?data=%3DATPrNXYmETPtZiMykTMzITP0NXZSRWa',
	socials: [
		{ label: 'Instagram', url: 'https://www.instagram.com/restaurante_pasapan/' },
		{ label: 'Facebook', url: 'https://es-es.facebook.com/RestaurantePasapan/' },
		{
			label: 'Tripadvisor',
			url: 'https://www.tripadvisor.es/Restaurant_Review-g187494-d12340824-Reviews-Restaurante_Pasapan-Segovia_Province_of_Segovia_Castile_and_Leon.html',
		},
		{
			label: 'Turismo Castilla y León',
			url: 'https://www.turismocastillayleon.com/es/servicios/comer/restaurantes/delegacion-restaurante-cafe',
		},
	],
	legal: [
		{ label: 'Aviso Legal', url: '/aviso-legal/' },
		{ label: 'Política de Privacidad', url: '/privacidad/' },
		{ label: 'Condiciones de Uso de Reservas', url: '/condiciones-de-uso-de-las-reservas/' },
		{ label: 'Términos y Condiciones de Compra', url: '/terminos-condiciones-compra/' },
		{ label: 'Política de Cookies', url: '/cookies/' },
	],
} as const;

export const announcement = {
	text: '¡Bienvenidos al Restaurante Pasapán!',
	hours: 'Abierto de martes a domingo de 12h a 16h y de 20h a 00h',
};

export function formatPrice(value: number): string {
	return `${String(value).replace('.', ',')} €`;
}
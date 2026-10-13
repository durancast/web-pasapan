export type AllergenKey =
	| 'gluten'
	| 'huevo'
	| 'lacteos'
	| 'sesamo'
	| 'pescado'
	| 'soja'
	| 'sulfitos'
	| 'moluscos'
	| 'frutos-cascara'
	| 'mostaza';

export interface AllergenInfo {
	key: string;
	label: string;
	icon: string;
}

export const allergenCatalog: AllergenInfo[] = [
	{ key: 'gluten', label: 'Gluten', icon: '/img/allergens/gluten.png' },
	{ key: 'huevo', label: 'Huevo', icon: '/img/allergens/huevo.png' },
	{ key: 'lacteos', label: 'Lácteos', icon: '/img/allergens/lacteos.png' },
	{ key: 'sesamo', label: 'Granos de sésamo', icon: '/img/allergens/sesamo.png' },
	{ key: 'pescado', label: 'Pescado', icon: '/img/allergens/pescado.png' },
	{ key: 'soja', label: 'Soja', icon: '/img/allergens/soja.png' },
	{ key: 'sulfitos', label: 'Sulfitos', icon: '/img/allergens/sulfitos.png' },
	{ key: 'moluscos', label: 'Moluscos', icon: '/img/allergens/moluscos.png' },
	{ key: 'frutos-cascara', label: 'Frutos de cáscara', icon: '/img/allergens/frutos-cascara.png' },
	{ key: 'mostaza', label: 'Mostaza', icon: '/img/allergens/mostaza.png' },
];

export function allergenInfo(key: string): AllergenInfo {
	const info = allergenCatalog.find((a) => a.key === key);
	if (!info) throw new Error(`Alergeno desconocido: ${key}`);
	return info;
}
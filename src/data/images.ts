import type { ImageMetadata } from 'astro';

/**
 * Todas las imágenes de contenido viven en `src/assets/images/` para que Astro
 * las procese (AVIF/WebP, redimensionado y compresión) con `astro:assets`.
 */
const modules = import.meta.glob<{ default: ImageMetadata }>('../assets/images/**/*.{jpg,jpeg,png,webp,avif}', {
	eager: true,
});

export interface AssetImage {
	image: ImageMetadata;
	width: number;
	height: number;
}

/**
 * `ImageMetadata` importado llega envuelto en un `Proxy` de Astro que marca la
 * imagen como "referenciada" (y evita borrar el original) al leer cualquier
 * propiedad como `.width`. Leemos las dimensiones del `clone` para no activarlo.
 */
export function toAsset(imported: ImageMetadata): AssetImage {
	const plain = (imported as ImageMetadata & { clone?: ImageMetadata }).clone ?? imported;
	return { image: imported, width: plain.width, height: plain.height };
}

const byFileName: Record<string, AssetImage> = {};
for (const [path, mod] of Object.entries(modules)) {
	const file = path.split('/').pop();
	if (file && mod?.default) byFileName[file] = toAsset(mod.default);
}

/**
 * Resuelve una ruta heredada (`/img/dishes/salmon-marinado.png`) o un nombre de
 * archivo (`salmon-marinado.png`) al asset optimizable de `src/assets/images/`.
 */
export function getImage(src: string | undefined | null): AssetImage | undefined {
	if (!src) return undefined;
	const file = src.split('/').pop()?.split('?')[0];
	return file ? byFileName[file] : undefined;
}

/**
 * Genera una lista de anchos para `srcset`, filtrando los que superan el ancho
 * real de la imagen (para no reescalar) y garantizando el ancho nativo al final.
 */
export function responsiveWidths(max: number, steps: number[]): number[] {
	if (!max) return steps;
	const list = steps.filter((w) => w <= max);
	if (!list.includes(max)) list.push(max);
	return [...new Set(list)].sort((a, b) => a - b);
}

/** Anchos habituales para las tarjetas de plato (se muestran a ~256px en desktop). */
export const CARD_WIDTHS = [256, 320, 384, 512, 640, 720];

/** Anchos habituales para imágenes a todo lo ancho (cabeceras / héroes). */
export const HERO_WIDTHS = [480, 640, 960, 1280, 1600, 1920];

# Restaurante Pasapán — Guía para el Agente (Astro 7 + Tailwind v4 + Cloudflare)

## Comandos del Proyecto
- Servidor de desarrollo (en segundo plano): `pnpm astro dev --background`
- Comprobación de tipos y Astro: `pnpm run check`
- Build de producción: `pnpm run build`
- Preview en Cloudflare Workers local: `pnpm run preview`

## Arquitectura Real del Repositorio
1. **Estilos y Tema (`src/styles/global.css`):**
   - Usamos **Tailwind CSS v4** (`@import "tailwindcss";` y bloque `@theme`).
   - Tipografías: `font-display` (*Fraunces*) para títulos y `font-sans` (*Instrument Sans*) para cuerpo.
   - Paleta semántica obligatoria: `bg-paper`, `bg-paper-deep`, `bg-cream`, `text-ink`, `text-ink-soft`, `text-bark`, `bg-burdeos`, `bg-burdeos-deep`, `text-gold`, `text-gold-deep`, `text-olive`, `border-line`, `border-sand`. Nunca uses colores grises genéricos de Tailwind (`gray-*` o `slate-*`).
2. **Internacionalización (`src/data/i18n.ts` y `BaseLayout.astro`):**
   - El sitio soporta 5 idiomas en cliente (`es`, `en`, `fr`, `it`, `pt`) guardados en `localStorage.getItem('pasapan.lang')`.
   - Los textos de UI llevan atributo `data-i18n="clave"`, pero **SIEMPRE deben renderizar en el servidor el texto en español por defecto** dentro de la etiqueta para evitar parpadeos (FOUC) y asegurar el SEO.
   - Los textos multilingües de platos (`MenuCard.astro`) usan atributos `lang={l}` y `data-lang={l}`, llevando `hidden={l !== 'es'}` por defecto en el SSR.
3. **Datos Centralizados (`src/data/`):**
   - `site.ts`: Configuración general, teléfono (`site.phone.display` para mostrar `921 70 10 06` y `site.phone.tel` para enlaces `tel:`), horarios y función `formatPrice()` (siempre con 2 decimales y coma: `14,50 €`).
   - `menu.json`: Platos de la carta (`general`, `veggie`, `sin-gluten`) divididos en `entrantes`, `principales` y `postres`.
   - `drinks.ts`: Carta de vinos (`wines`), cervezas (`beers`) y zumos/kombuchas (`juices`), renderizada con `DrinkSection.astro`.
   - `allergens.ts`: Catálogo tipado (`AllergenKey`) de los 10 alérgenos presentes en `/public/img/allergens/`.
4. **Reglas de Calidad:**
   - Tratamiento al cliente siempre de **TÚ**.
   - Antes de finalizar cualquier tarea, ejecuta siempre `pnpm run check` y `pnpm run build`.
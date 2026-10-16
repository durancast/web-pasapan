# 🍽️ Restaurante Pasapán — Web oficial

> Web oficial del **Restaurante Pasapán** (Segovia, España): cocina tradicional del siglo XXI con carta, menú del día, reservas y pedidos online, disponible en **5 idiomas**.

🔗 **Producción:** [restaurantepasapan.es](https://restaurantepasapan.es)

![Astro](https://img.shields.io/badge/Astro-7-FF5D01?logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare&logoColor=white)
![Node](https://img.shields.io/badge/Node-%E2%89%A522.12-339933?logo=nodedotjs&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=white)

---

## 📖 Sobre el proyecto

Sitio web del restaurante **Pasapán**, en pleno casco histórico de Segovia. Es una web **100 % estática** construida con **Astro 7** y **Tailwind CSS v4**, desplegada en **Cloudflare Workers**, pensada para cargar rápido, posicionar bien y ser fácil de mantener.

**Funcionalidades principales**

- 🍴 **Carta** con pestañas (general, veggie y sin gluten) y bodega de vinos, cervezas y zumos, con fichas de **alérgenos**.
- 📅 **Menú del día**, plato del día y combos.
- 🪑 **Reservas online** y 🛵 **pedidos online** integrados.
- 🌍 **5 idiomas** (español, inglés, francés, italiano y portugués).
- 📜 Páginas legales (aviso legal, privacidad, cookies, reservas y compra).
- 📖 *"La leyenda de la Mujer Muerta"* como storytelling gastronómico.

## 🧰 Stack

| Área | Tecnología |
| --- | --- |
| Framework | **Astro 7** (output estático) |
| Estilos | **Tailwind CSS v4** (`@theme`, tokens semánticos) |
| Lenguaje | **TypeScript** |
| Imágenes | `astro:assets` (sharp) → **AVIF/WebP** responsivos |
| Hosting | **Cloudflare Workers** + `wrangler` |
| SEO | Sitemap, Open Graph/Twitter, JSON-LD `Restaurant` |
| Tooling | **pnpm**, Node **≥ 22.12** |

## ✨ Lo más destacado

- **Rendimiento**: páginas estáticas, imágenes AVIF/WebP con `srcset` responsivo y LCP optimizado (`loading="eager"` + `fetchpriority="high"`).
- **i18n de 5 idiomas** en cliente **sin FOUC**: el servidor renderiza en español y el idioma se intercambia con `data-i18n` + `localStorage`.
- **SEO cuidado**: `canonical`, Open Graph, Twitter Card, datos estructurados `schema.org/Restaurant`, sitemap y **redirects 301** de rutas antiguas.
- **Accesibilidad**: skip link, `aria`, `inert` en contenido oculto y contraste revisado.
- **Design system** con paleta semántica (`burdeos`, `gold`, `ink`, `paper`…) y tipografías **Fraunces** + **Instrument Sans**.

## 🗂️ Estructura

```text
web-pasapan/
├─ public/
│  └─ img/                  # estáticos que Astro no procesa
│     ├─ allergens/         # iconos de alérgenos
│     ├─ gallery/           # fotos adicionales
│     └─ logo/              # logos, QR, ribete
├─ src/
│  ├─ assets/images/        # imágenes que optimiza Astro (dishes, hero, restaurant)
│  ├─ components/           # Header, Footer, MenuCard, PageHero, DrinkSection…
│  ├─ data/                 # contenido y configuración centralizada
│  ├─ layouts/BaseLayout.astro
│  ├─ pages/                # rutas (11 páginas)
│  └─ styles/global.css     # Tailwind v4 + tokens del tema
├─ astro.config.mjs
├─ wrangler.jsonc
└─ package.json
```

**Rutas** (11 páginas): `/`, `/carta/`, `/menudeldia/`, `/contacto/`, `/reservas/`, `/pedidos/` y las legales `/aviso-legal/`, `/privacidad/`, `/cookies/`, `/condiciones-de-uso-de-las-reservas/`, `/terminos-condiciones-compra/`.

## 🚀 Cómo empezar

**Requisitos:** Node ≥ 22.12 y pnpm.

```bash
pnpm install      # instala dependencias
pnpm dev          # servidor de desarrollo en http://localhost:4321
pnpm check        # chequeo de tipos y Astro
pnpm build        # build de producción en ./dist
pnpm preview      # build + preview local en Cloudflare Workers
pnpm deploy       # build + deploy a Cloudflare
```

## 🧞 Scripts

| Comando | Acción |
| --- | --- |
| `pnpm dev` | Servidor de desarrollo (`localhost:4321`) |
| `pnpm check` | Comprobación de tipos y de ficheros Astro |
| `pnpm build` | Build estático a `./dist` |
| `pnpm preview` | Build + preview con `wrangler dev` |
| `pnpm deploy` | Build + `wrangler deploy` a Cloudflare |
| `pnpm astro …` | CLI de Astro |

## 🌍 Internacionalización

- Idiomas: `es`, `en`, `fr`, `it`, `pt`; clave en `localStorage`: **`pasapan.lang`**.
- Los textos de UI llevan `data-i18n` (y `data-i18n-html`, `data-i18n-aria`, `data-i18n-placeholder`).
- **El SSR siempre pinta el español por defecto** para evitar parpadeos (FOUC) y ayudar al SEO; el script de `BaseLayout` cambia el idioma en cliente.
- Los textos de platos usan `lang` + `data-lang` con `hidden` para el idioma inactivo.

## 🖼️ Imágenes y rendimiento

- Las imágenes de contenido viven en **`src/assets/images/`** para que Astro las procese (no en `public/`).
- Se renderizan con `<Picture>`/`<Image>` de `astro:assets`: **AVIF + WebP con fallback WebP**, `srcset`/`sizes` responsivos y `loading="lazy"`.
- La cabecera/héroe (LCP) usa **`loading="eager"` + `fetchpriority="high"` + `decoding="async"`**.
- Cloudflare cachea `/_astro/*` como `immutable` (1 año).

## 📝 Datos y contenido

Todo el contenido está centralizado en `src/data/`: `site.ts` (negocio, horarios, `formatPrice()`), `menu.json` (carta), `drinks.ts` (bodega), `allergens.ts` (alérgenos), `legal.ts`, `legend.ts` e `i18n.ts`.

## ☁️ Despliegue

Build **estático** con el adaptador `@astrojs/cloudflare` y despliegue en **Cloudflare Workers** (`wrangler.jsonc`, binding `ASSETS`). Las rutas antiguas se redirigen con **301** desde `astro.config.mjs`.

## ✅ Convenciones de código

- Trato al cliente siempre de **"tú"**.
- **Paleta semántica obligatoria** (`bg-paper`, `text-ink`, `bg-burdeos`, `text-gold`…); nunca grises genéricos de Tailwind (`gray-*`, `slate-*`).
- Antes de dar una tarea por terminada: `pnpm check` y `pnpm build`.

## 🤖 Desarrollo asistido por IA

El repositorio incluye `AGENTS.md` y `CLAUDE.md` con las **reglas y convenciones** para agentes de código IA (arquitectura, estilos, i18n y criterios de calidad). El desarrollo se apoyó en agentes IA **bajo revisión humana**, manteniendo un flujo de trabajo reproducible y documentado.

## 👤 Autor

**Alejandro Duran Castellano** · [@durancast](https://github.com/durancast)

Web desarrollada para **Restaurante Pasapán** (Segovia). Código y diseño © Restaurante Pasapán.

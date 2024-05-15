# 🍥Fuwari

blog estático construida con [Astro](https://astro.build).

[**🖥️Demo en Vivo (Vercel)**](https://fuwari.vercel.app)&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;[**🌏README en Chino**](https://github.com/saicaca/fuwari/blob/main/README.zh-CN.md)&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;[**🌏README en Japonés**](https://github.com/saicaca/fuwari/blob/main/README.ja-JP.md)&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;[**📦Versión Antigua en Hexo**](https://github.com/saicaca/hexo-theme-vivia)

![Imagen de Vista Previa](https://raw.githubusercontent.com/saicaca/resource/main/fuwari/home.png)

## ✨ Características

- [x] Construido con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com)
- [x] Animaciones suaves y transiciones de página
- [x] Modo claro/oscuro
- [x] Colores del tema y banner personalizables
- [x] Diseño responsivo
- [ ] Comentarios
- [x] Búsqueda
- [ ] TOC (Tabla de Contenidos)

## 🚀 Cómo Usar

1. [Genera un nuevo repositorio](https://github.com/saicaca/fuwari/generate) a partir de esta plantilla o crea un fork de este repositorio.
2. Para editar tu blog localmente, clona tu repositorio y ejecuta `pnpm install` Y `pnpm add sharp` para instalar las dependencias.  
   - Instala [pnpm](https://pnpm.io) `npm install -g pnpm` si no lo tienes.
3. Edita el archivo de configuración `src/config.ts` para personalizar tu blog.
4. Ejecuta `pnpm new-post <filename>` para crear una nueva publicación y edítala en `src/content/posts/`.
5. Despliega tu blog en Vercel, Netlify, GitHub Pages, etc., siguiendo [las guías](https://docs.astro.build/en/guides/deploy/). Necesitas editar la configuración del sitio en `astro.config.mjs` antes del despliegue.

## ⚙️ Frontmatter de las Publicaciones

```yaml
---
title: Mi Primer Post en el Blog
published: 2023-09-09
description: Este es el primer post de mi nuevo blog en Astro.
image: /images/cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
---
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando                              | Acción                                            |
|:------------------------------------ |:------------------------------------------------- |
| `pnpm install` Y `pnpm add sharp`    | Instala las dependencias                          |
| `pnpm dev`                           | Inicia el servidor de desarrollo local en `localhost:4321` |
| `pnpm build`                         | Construye tu sitio de producción en `./dist/`     |
| `pnpm preview`                       | Previsualiza tu construcción localmente, antes de desplegar |
| `pnpm new-post <filename>`           | Crea una nueva publicación                        |
| `pnpm astro ...`                     | Ejecuta comandos de la CLI como `astro add`, `astro check` |
| `pnpm astro --help`                  | Obtén ayuda usando la CLI de Astro                |

# 🍥Fuwari

A static blog template built with [Astro](https://astro.build).

[**🖥️Live Demo (Vercel)**](https://fuwari.vercel.app)&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;[**🌏中文 README**](https://github.com/saicaca/fuwari/blob/main/README.zh-CN.md)&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;[**🌏日本語 README**](https://github.com/saicaca/fuwari/blob/main/README.ja-JP.md)&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;[**📦Old Hexo Version**](https://github.com/saicaca/hexo-theme-vivia)

![Preview Image](https://raw.githubusercontent.com/saicaca/resource/main/fuwari/home.png)

## ✨ Features

- [x] Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com)
- [x] Smooth animations and page transitions
- [x] Light / dark mode
- [x] Customizable theme colors & banner
- [x] Responsive design
- [ ] Comments
- [x] Search
- [ ] TOC

## 🚀 How to Use

1. [Generate a new repository](https://github.com/saicaca/fuwari/generate) from this template or fork this repository.
2. To edit your blog locally, clone your repository, run `pnpm install` AND `pnpm add sharp` to install dependencies.  
   - Install [pnpm](https://pnpm.io) `npm install -g pnpm` if you haven't.
3. Edit the config file `src/config.ts` to customize your blog.
4. Run `pnpm new-post <filename>` to create a new post and edit it in `src/content/posts/`.
5. Deploy your blog to Vercel, Netlify, GitHub Pages, etc. following [the guides](https://docs.astro.build/en/guides/deploy/). You need to edit the site configuration in `astro.config.mjs` before deployment. 

## ⚙️ Frontmatter of Posts

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: /images/cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
---
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                             | Action                                           |
|:------------------------------------|:-------------------------------------------------|
| `pnpm install` AND `pnpm add sharp` | Installs dependencies                            |
| `pnpm dev`                          | Starts local dev server at `localhost:4321`      |
| `pnpm build`                        | Build your production site to `./dist/`          |
| `pnpm preview`                      | Preview your build locally, before deploying     |
| `pnpm new-post <filename>`          | Create a new post                                |
| `pnpm astro ...`                    | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro --help`                 | Get help using the Astro CLI                     |


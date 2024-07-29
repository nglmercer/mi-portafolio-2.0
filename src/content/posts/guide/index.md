---
title: Guías simples para Fuwari
published: 2023-09-01
description: "Cómo usar esta plantilla de blog."
image: "./cover.jpeg"
tags: ["Fuwari", "Blogging", "Customization"]
category: Guides
draft: false
---

> Fuente de la imagen de portada: [Source](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/208fc754-890d-4adb-9753-2c963332675d/width=2048/01651-1456859105-(colour_1.5),girl,_Blue,yellow,green,cyan,purple,red,pink,_best,8k,UHD,masterpiece,male%20focus,%201boy,gloves,%20ponytail,%20long%20hair,.jpeg)

Esta plantilla de blog está construida con [Astro](https://astro.build/).Para las cosas que son no mencionado en esta guía, puede encontrar las respuestas en el [Astro Docs](https://docs.astro.build/).

## Front-Matter of Publics

```yaml
---
title: Mi primera publicación de blog
published: 2023-09-09
description: Esta es la primera publicación de mi nuevo blog Astro.
image: ./cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
---
```

| Attribute     | Descripción                                                                                                                                                                                               |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `title`       |El título de la publicación.                                                                                                                                                                      |
| `published`   | La fecha en que se publicó la publicación.                                                                                                                                                               |
| `description` | Una breve descripción de la publicación.Se muestra en la página de índice.                                                                                                                                    |
| `image`       | The cover image path of the post.<br/>1. Start with `http://` or `https://`: Use web image<br/>2. Start with `/`: For image in `public` dir<br/>3. With none of the prefixes: Relative to the markdown file |
| `tags`        | Las etiquetas de la publicación.                                                                                                                                                                      |
| `category`    | La categoría de la publicación.                                                                                                                                                                   |
| `draft`        | Si esta publicación sigue siendo un borrador, que no se mostrará.                                                                                                                                                   |

## dónde colocar los archivos de publicación



Sus archivos de publicación deben colocarse en`src/content/posts/` directorio.También puede crear subdirectorios para organizar mejor sus publicaciones y activos.

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```

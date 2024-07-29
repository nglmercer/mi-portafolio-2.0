---
title: Ejemplo de markdown
published: 2023-10-01
description: Un simple ejemplo de una publicación de blog de Markdown.
tags: [Markdown, Blogging, Demo]
category: Examples
draft: false
---

# Un encabezado H1

Los párrafos están separados por una línea en blanco.asdasd

2 ° párrafo._Italic_, ** negrita ** y `monoespace`.Listas detalladas
parece:

- Éste
- Aquél
- el otro
Note that --- not considering the asterisk --- the actual text
content starts at 4-columns in.

> Las citas de bloque son
> Escrito así.
>
> Pueden abarcar múltiples párrafos,
> Si quieres.

Use 3 guiones para un EM-Dash.Use 2 guiones para rangos (por ejemplo, "es todo
En los capítulos 12-14 "). Tres puntos ... se convertirán en un elipsis.
Unicode es compatible.☺

## Un encabezado H2
Aquí hay una lista numerada:

1. Primer elemento
2. Segundo elemento
3. Tercer artículo

Tenga en cuenta nuevamente cómo el texto real comienza en 4 columnas en (4 caracteres
desde el lado izquierdo).Aquí hay una muestra de código:

    # Déjame reiterarse ...
    para i en 1 .. 10 {do-something (i)}

Como probablemente adivinó, sangró 4 espacios.Por cierto, en lugar de
Error al bloque, puede usar bloques delimitados, si lo desea:

```
define foobar() {
    print "Welcome to flavor country!";
}
```

(Lo que facilita la copia y el pegado).Opcionalmente puede marcar el
Bloque delimitado para que PANDOC sea sintaxis resaltarlo:

```python
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print i
```

### Un encabezado H3

Ahora una lista anidada:

1. Primero, obtenga estos ingredientes:

    - zanahorias
    - apio
    - lentejas

2. Hervir un poco de agua.

3. Volcar todo en la olla y seguir
    Este algoritmo:

        Encuentra una cuchara de madera
        descubrir bote
        remover
        bote de cubierta
        Balance de la cuchara de madera precariamente en el mango de la olla
        espera 10 minutos
        GOTO primer paso (o apague el quemador cuando esté terminado)

    No golpee una cuchara de madera o caerá.

Notice again how text always lines up on 4-space indents (including
that last line which continues item 3 above).

Here's a link to [a website](http://foo.bar), to a [local
doc](local-doc.html), and to a [section heading in the current
doc](#an-h2-header). Here's a footnote [^1].

[^1]: Footnote text goes here.

Tables can look like this:

size material color

---

9 de cuero marrón
10 lienzo de cáñamo natural
11 Vidry Transparent

Mesa: zapatos, sus tamaños y de qué están hechos

(Lo anterior es el subtítulo de la tabla). PANDOC también admite
Tablas de múltiples líneas:

---

keyword text

---

puestas de sol rojas, manzanas y
otros rojos o rojizos
cosas.

Hojas verdes, hierba, ranas
y otras cosas son
No es fácil ser.
---

A horizontal rule follows.

---

Here's a definition list:

apples
: Good for making applesauce.
oranges
: Citrus!
tomatoes
: There's no "e" in tomatoe.

Again, text is indented 4 spaces. (Put a blank line between each
term/definition pair to spread things out more.)

Here's a "line block":

| Line one
| Line too
| Line tree

and images can be specified like so:

<!-- [//]: # (![example image]&#40;./demo-banner.png "An exemplary image"&#41;) -->

Inline math equations go in like so: $\omega = d\phi / dt$. Display
math should get its own line and be put in in double-dollarsigns:

$$I = \int \rho R^{2} dV$$

And note that you can backslash-escape any punctuation characters
which you wish to be displayed literally, ex.: \`foo\`, \*bar\*, etc.

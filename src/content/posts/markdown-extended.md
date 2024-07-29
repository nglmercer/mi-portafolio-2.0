---
title: Características e Markdown
published: 2023-05-01
description: 'Lea más sobre las funciones de Markdown en Fuwari'
image: ''
tags: [Demo, Example, Markdown, Fuwari]
category: 'Examples'
draft: false 
---

## Tarjetas de repositorio de Github
Puede agregar tarjetas dinámicas que vinculen a los repositorios de GitHub, en la carga de la página, la información del repositorio se extrae de la API de GitHub.

::github{repo="Fabrizz/MMM-OnSpotify"}

Create a GitHub repository card with the code `::github{repo="<owner>/<repo>"}`.

```markdown
::github{repo="saicaca/fuwari"}
```

## Advertencias

Se admiten los siguientes tipos de advertencias: `nota`` tip` `importante`` advertencia` `precaución '

:::note
Highlights information that users should take into account, even when skimming.
:::

:::tip
Optional information to help a user be more successful.
:::

:::important
Crucial information necessary for users to succeed.
:::

:::warning
Critical content demanding immediate user attention due to potential risks.
:::

:::caution
Negative potential consequences of an action.
:::

```markdown
:::note
Highlights information that users should take into account, even when skimming.
:::

:::tip
Optional information to help a user be more successful.
:::
```

El título de la advertencia se puede personalizar.

:::note[MY CUSTOM TITLE]
This is a note with a custom title.
:::

```markdown
:::note[MY CUSTOM TITLE]
This is a note with a custom title.
:::
```
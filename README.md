# Portfolio

## Descripción del proyecto

Rediseño de mi portfolio ara desacoplar la gestión del contenido del código fuente utilizando un `CMS` y aplicar el conocimiento adquirido como desarrollador web para darle una mejor estética visual y usabilidad a mi antiguo portfolio.

## Arquitectura

Se utiliza un sistema `CMS Headless` para la gestión centralizada de los datos facilitando la edición de los textos e información que se publica dentro de la web y un frontend puramente en `Astro` para la gestión de esta información.

De esta manera los cambios en el contenido no afectan al código y viceversa pudiendo editar, añadir o eliminar entradas desde un panel centralizado y sin necesidad de interactuar con bases de datos.

## Stack tecnológico

- Frontend: `Astro` con generación de rutas estáticas y dinámicas aprovechando la lógica que se puede incorporar en el frontmatter para realizar peticiones y obtener información y `Tailwind CSS` para la maquetación.
- Gestor de contenido (CMS): `Hygraph` que ofrece una `API GraphQL` con la que podemos obtener la información que necesitamos de una manera rápida y sencilla.

## Aprendizaje y desafíos técnicos

Con este proyecto he aprendido a consumir datos de una `API GraphQL` ya que hasta la fecha solamente había trabajado con la arquitectura `REST`.

El mayor desafío técnico con el que me he encontrado es la generación de rutas dinámicas dentro de `Astro` porque aunque había realizado algún proyecto con este framework me ha obligado a profundizar más en el mismo y a descubrir partes que hasta ahora desconocía.

Esto me ha permitido comprender mejor como funciona, entender mejor sus casos de uso y prepararme para futuros proyectos donde estoy seguro que volveré a utilizarlo.

Además, he aprendido más sobre `Vercel` como plataforma de despliegue ya que he podido configurar los despliegues de manera automática gracias al uso de `Webhooks` de manera que cualquier cambio en el CMS actualice el contenido del proyecto.
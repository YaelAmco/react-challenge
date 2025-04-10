# 📚 Book Explorer Challenge

## 🎯 Objetivo

Desarrollar un componente funcional en React + TypeScript llamado `Solution` que consuma una API REST y muestre una galería interactiva de libros con funcionalidades de búsqueda, filtrado y paginación.

---

## 📦 Fuente de datos

La información se obtiene desde el siguiente endpoint:

http://localhost:3000/books


La estructura de la respuesta es:

## 🛠 Funcionalidades requeridas
El componente debe:

Mostrar una lista de libros en formato de tarjetas visuales (cards) usando TailwindCSS.

Renderizar los campos más importantes:
Título, Año, Género, Autor, Editorial, Disponibilidad, Rating y Etiquetas (tags).

Incluir una barra de búsqueda en tiempo real para filtrar libros por título.

Incluir un filtro por género, generado dinámicamente con las opciones disponibles.

Implementar paginación cliente-servidor, permitiendo cambiar de página con botones de navegación (Previous, Next).

Actualizar la lista de libros desde la API cada vez que cambie la página.

Utilizar tipado estricto con TypeScript (interfaces claras para los datos).

Asegurar que el diseño sea atractivo, responsivo y agradable a la vista, siguiendo principios básicos de UI/UX.

## ✅ Consideraciones adicionales
Toda la lógica debe estar contenida dentro del archivo Solution.tsx.

El componente se importa y utiliza dentro de App.tsx.

No es necesario implementar ordenamiento en esta prueba.

La API ya está levantada localmente, no es necesario modificarla.

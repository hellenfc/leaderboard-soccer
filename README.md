# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instalación

Instalar dependencias del proyecto con el comando:

### `npm install`

## Script Disponibles

### `npm start`

Corre la aplicación en modo de desarrollo.\
 [http://localhost:3000](http://localhost:3000) 

### `npm test`

Corre las pruebas de la aplicación.\
En este caso para pruebas futuras

### `npm run build`

Hace build de la applicación para producción en la carpeta `build`.\

## Estructura del proyecto

- `public/`: Contiene los activos públicos del proyecto, como el archivo HTML y cualquier otro archivo estático.
- `src/`: Este directorio contiene el código fuente del proyecto.
  - `index.js`: El punto de entrada de la aplicación React.
  - `App.js`: Componente principal de la aplicación.
  - `components/`: Contiene los componentes reutilizables de la aplicación. En este caso `Leaderboard` en donde se hace la petición a la API y se renderiza el componente `LeagueDropdown` y `SortableTable`. Siendo esto en diferentes componentes para mantener modularizado el sistema.
- `node_modules/`: Contiene las dependencias del proyecto.
- `package.json`: Archivo de configuración de npm que contiene las dependencias del proyecto.
- `README.md`: Archivo de documentación del proyecto.

## Dependencias

- Se utilizó, `Tailwind CSS` para el diseño de la aplicación, por ser una librería fácil de útilizar, sin mucho boilerplate para ser utilizada, con la flexibilidad de diseño permitiendo plasmar sencillamente una idea. Sin necesidad de agregar una librería de diseño más robusta como `Material UI` para una aplicación con este tamaño y permitiendo integrarse en un futuro a otras librerías en donde Tailwind sea utilizado permitiendo una integración más sencilla y gradual.
- Se utilizó `react-query` por su fácil integración, con poca configuración y su fácil manejo de estados, lo que permite tener una mejor experiencia de usuario.

## Endpoint de la API

https://www.thesportsdb.com/free_sports_api

Endpoint utilizado: www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4328&s=2020-2021

En este caso se agregó un dropdown para seleccionar la liga a la que se quiere hacer la petición. Agregando una nueva funcionalidad a la aplicación.


## Mejoras futuras
- Agregar pruebas unitarias.
- Agregar un sistema de paginación para la tabla.
- Permitir más ligas en el dropdown.
- Agregar opción de seleccionar la temporada.






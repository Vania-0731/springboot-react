
# CRUD con Web Services - Producto y Categoría

## Objetivo del Lab

Este laboratorio tiene como objetivo la implementación de un CRUD (Crear, Leer, Actualizar y Eliminar) utilizando Web Services para las tablas **Producto** y **Categoría**. La aplicación está dividida en dos partes principales: **Backend** (Java con Spring Boot) y **Frontend** (React).

### Estructura del Proyecto

- **Backend**: Se utiliza Spring Boot con Spring Data JPA para crear y gestionar las entidades **Producto** y **Categoría**, permitiendo realizar operaciones CRUD.
- **Frontend**: Se utiliza React para mostrar y gestionar los productos y categorías de forma interactiva.

---

## Backend

### Entidades

#### Producto
La entidad **Producto** tiene los siguientes atributos:

- `id`: Identificador único del producto.
- `nombre`: Nombre del producto.
- `precio`: Precio del producto.
- `stock`: Cantidad disponible del producto.

#### Categoría
La entidad **Categoría** tiene los siguientes atributos:

- `id`: Identificador único de la categoría.
- `nombre`: Nombre de la categoría.

### Controladores

- **ProductoController**: Gestiona las peticiones relacionadas con productos, permitiendo listar, registrar, actualizar y eliminar productos.
- **CategoriaController**: Gestiona las peticiones relacionadas con categorías, permitiendo listar, registrar, actualizar y eliminar categorías.

### Excepciones
Se manejan excepciones personalizadas para situaciones como la búsqueda de un producto o categoría no existente, proporcionando respuestas claras y adecuadas.

### Repositorios

- **ProductoRepository**: Usando Spring Data JPA, permite realizar operaciones sobre la tabla de productos.
- **CategoriaRepository**: Similar al repositorio de productos, facilita la interacción con la tabla de categorías.

---

## Frontend

### ListarProducto
La vista **ListarProducto** muestra una lista de todos los productos registrados, incluyendo información como nombre, precio y stock.

### ListarCategoria
La vista **ListarCategoria** muestra una lista de todas las categorías disponibles en el sistema.

### Funcionalidad

- **Registrar Producto**: Permite registrar nuevos productos mediante un formulario interactivo que envía los datos al backend.
- **Registrar Categoría**: Similar al formulario de productos, permite registrar nuevas categorías.

### Verificación de Funcionalidades
Se realizan pruebas para verificar que las operaciones CRUD funcionan correctamente tanto en el frontend como en el backend, asegurando que las operaciones de **listar**, **registrar**, **actualizar** y **eliminar** productos y categorías se reflejan adecuadamente en la base de datos.

---

## Conclusiones

1. **Implementación exitosa del CRUD en el backend**: Al utilizar Spring Boot y JPA, pude implementar el CRUD de manera eficiente y sin necesidad de escribir SQL manual, lo que agiliza la creación de aplicaciones backend.

2. **Manejo adecuado de excepciones**: Implementé excepciones personalizadas para manejar errores de manera efectiva, proporcionando respuestas claras y mejorando la experiencia del usuario.

3. **Integración fluida entre frontend y backend**: Usando React para el frontend y Spring Boot para el backend, pude integrar ambas partes de la aplicación sin problemas, lo que demuestra la efectividad de usar estas tecnologías en conjunto.

4. **Verificación constante de funcionalidades**: Realicé pruebas para asegurarme de que todas las funcionalidades del CRUD (listar, registrar, actualizar, eliminar) estuvieran funcionando correctamente, lo que garantizó una integración exitosa.

5. **Mejora en la estructura del proyecto**: Aprendí a estructurar mejor mi proyecto separando la lógica de negocio, el acceso a datos y la presentación, lo que facilita la escalabilidad y el mantenimiento del sistema.

---

## Ver más archivos en GitHub

Puedes acceder al código completo del proyecto en [GitHub](#).

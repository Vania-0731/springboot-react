
# Spring Boot + React Project 🚀

Este es un proyecto que utiliza **Spring Boot** en el backend ⚙️ y **React** en el frontend 🌐. El objetivo del proyecto es crear una aplicación web con funcionalidades CRUD para **Productos** 🛒 y **Categorías** 📂. A través de un servicio web RESTful, se gestionan las operaciones en el backend y el frontend se encarga de la interacción con el usuario 👨‍💻.

## Tecnologías Utilizadas 🛠️

- **Spring Boot** para el backend ⚙️
- **React** para el frontend 🌐
- **JPA / Hibernate** para interactuar con la base de datos 💾
- **Axios** para las solicitudes HTTP 🌐
- **MySQL** (o cualquier base de datos relacional) para la persistencia de datos 🗃️

## Estructura del Proyecto 🏗️

### Frontend 🎨

La carpeta `front` contiene el código de React:

front/
│ App.jsx # Componente principal de la aplicación 📲
│ main.jsx # Archivo de entrada principal para React 💻
│
├───assets
│ react.svg # Imagen de React para la interfaz 🌟
│
├───components
│ ListaCategorias.jsx # Componente para listar las categorías 🗂️
│ ListaProductos.jsx # Componente para listar los productos 🛍️
│ RegistrarCategoria.jsx # Componente para registrar una nueva categoría 📝
│ RegistrarProducto.jsx # Componente para registrar un nuevo producto 🏷️
│
├───pages
│ Home.jsx # Componente para la página principal con botones de navegación 🏠
│
└───services
categoriaService.js # Servicio para interactuar con el backend para categorías 🔄
productoService.js # Servicio para interactuar con el backend para productos 🔄

### Backend ⚙️

La carpeta `back` contiene el código de Spring Boot:

back/
└───src
├───main
│ ├───java
│ │ └───com
│ │ └───tecsup
│ │ └───tarea_spring
│ │ │ TareaSpringApplication.java # Clase principal de Spring Boot 🔧
│ │ │
│ │ ├───controlador
│ │ │ CategoriaControlador.java # Controlador para las categorías 🛠️
│ │ │ ProductoControlador.java # Controlador para los productos 🛒
│ │ │
│ │ ├───excepciones
│ │ │ ResourceNotFoundException.java # Excepción personalizada para recursos no encontrados ⚠️
│ │ │
│ │ ├───modelo
│ │ │ Categoria.java # Modelo para las categorías 📂
│ │ │ Producto.java # Modelo para los productos 🛍️
│ │ │
│ │ └───repositorio
│ │ CategoriaRepositorio.java # Repositorio de categorías 🗃️
│ │ ProductoRepositorio.java # Repositorio de productos 🗃️
│ │
│ └───resources
│ │ application.properties # Archivo de configuración de la base de datos 🔑

## Instalación 🔧

### Backend (Spring Boot) ⚙️

1. Clona este repositorio:

    ```bash
    git clone https://github.com/Vania-0731/springboot-react.git
    ```

2. Navega al directorio `back` (o donde tengas el código del servidor) y abre un terminal en ese directorio.

3. **Instala las dependencias**:

    Si estás usando **Maven**:

    ```bash
    mvn install
    ```

    Si usas **Gradle**, ejecuta:

    ```bash
    ./gradlew build
    ```

4. **Configura la base de datos**:

    Asegúrate de tener una base de datos configurada y ajusta las configuraciones en el archivo `application.properties` según sea necesario. 

    Ejemplo de configuración para MySQL:

    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/mi_base_de_datos
    spring.datasource.username=usuario
    spring.datasource.password=contraseña
    ```

5. **Inicia el backend**:

    Si estás utilizando Maven:

    ```bash
    mvn spring-boot:run
    ```

    O con Gradle:

    ```bash
    ./gradlew bootRun
    ```

### Frontend (React) 🌐

1. Navega al directorio `front` (o donde tengas el código del cliente) y abre un terminal en ese directorio.

2. **Instala las dependencias de Node**:

    ```bash
    npm install
    ```

    o si usas **Yarn**:

    ```bash
    yarn install
    ```

3. **Inicia el frontend**:

    ```bash
    npm start
    ```

    o si usas **Yarn**:

    ```bash
    yarn start
    ```

Esto debería iniciar tu servidor de desarrollo React en `http://localhost:3000` (por defecto).

## Funcionalidades ⚙️

### Backend 🔧

- **Productos**: CRUD (Crear, Leer, Actualizar, Eliminar) para productos 🛒.
- **Categorías**: CRUD (Crear, Leer, Actualizar, Eliminar) para categorías 📂.

### Frontend 🖥️

- **Listar Productos**: Muestra todos los productos registrados 🛍️.
- **Registrar Producto**: Permite agregar un nuevo producto 📝.
- **Actualizar Producto**: Permite editar un producto existente ✏️.
- **Eliminar Producto**: Elimina un producto ❌.
- **Listar Categorías**: Muestra todas las categorías 📂.
- **Registrar Categoría**: Permite agregar una nueva categoría 📝.
- **Actualizar Categoría**: Permite editar una categoría existente ✏️.
- **Eliminar Categoría**: Elimina una categoría ❌.

## Endpoints del Backend 🔌

- **GET** `/api/v1/productos` - Obtener todos los productos 🛒.
- **POST** `/api/v1/productos` - Crear un nuevo producto 📝.
- **GET** `/api/v1/productos/{id}` - Obtener un producto por ID 🔍.
- **PUT** `/api/v1/productos/{id}` - Actualizar un producto existente ✏️.
- **DELETE** `/api/v1/productos/{id}` - Eliminar un producto ❌.

- **GET** `/api/v1/categorias` - Obtener todas las categorías 📂.
- **POST** `/api/v1/categorias` - Crear una nueva categoría 📝.
- **GET** `/api/v1/categorias/{id}` - Obtener una categoría por ID 🔍.
- **PUT** `/api/v1/categorias/{id}` - Actualizar una categoría existente ✏️.
- **DELETE** `/api/v1/categorias/{id}` - Eliminar una categoría ❌.

## Contribuciones 🤝

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un **fork** de este repositorio 🍴.
2. Crea una nueva **branch** para tu funcionalidad (`git checkout -b nueva-funcionalidad`) 🌱.
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`) 📝.
4. Haz un **push** a la branch (`git push origin nueva-funcionalidad`) 🚀.
5. Abre un **pull request** 📬.

---

¡Espero que este proyecto te sea útil! Si tienes alguna pregunta o sugerencia, no dudes en contactarme 📧.


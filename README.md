# Spring Boot + React CRUD Application 🚀

Una aplicación web full-stack que combina **Spring Boot** en el backend y **React** en el frontend para gestionar productos y categorías mediante operaciones CRUD completas.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#️-tecnologías)
- [Estructura del Proyecto](#️-estructura-del-proyecto)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Configuración](#️-configuración)
- [Uso](#-uso)
- [API Endpoints](#-api-endpoints)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)

## ✨ Características

- ✅ **CRUD completo** para Productos y Categorías
- 🔄 **API RESTful** con Spring Boot
- 🎨 **Interfaz intuitiva** con React
- 💾 **Persistencia de datos** con JPA/Hibernate
- 🌐 **Comunicación HTTP** con Axios
- 📱 **Diseño responsivo**
- ⚡ **Desarrollo en tiempo real** con hot reload

## 🛠️ Tecnologías

### Backend
- **Spring Boot** 3.x
- **Spring Data JPA** / **Hibernate**
- **MySQL** (base de datos)
- **Maven** (gestión de dependencias)

### Frontend
- **React** 18.x
- **Axios** (cliente HTTP)
- **Vite** (herramienta de desarrollo)
- **ES6+** / **JSX**

## 🏗️ Estructura del Proyecto

```
springboot-react/
├── back/                              # Backend Spring Boot
│   └── src/main/
│       ├── java/com/tecsup/tarea_spring/
│       │   ├── TareaSpringApplication.java    # Clase principal
│       │   ├── controlador/
│       │   │   ├── CategoriaControlador.java  # Controller de categorías
│       │   │   └── ProductoControlador.java   # Controller de productos
│       │   ├── excepciones/
│       │   │   └── ResourceNotFoundException.java
│       │   ├── modelo/
│       │   │   ├── Categoria.java             # Entidad Categoría
│       │   │   └── Producto.java              # Entidad Producto
│       │   └── repositorio/
│       │       ├── CategoriaRepositorio.java  # Repository de categorías
│       │       └── ProductoRepositorio.java   # Repository de productos
│       └── resources/
│           └── application.properties         # Configuración
├── front/                             # Frontend React
│   ├── src/
│   │   ├── App.jsx                    # Componente principal
│   │   ├── main.jsx                   # Punto de entrada
│   │   ├── components/
│   │   │   ├── ListaCategorias.jsx    # Lista de categorías
│   │   │   ├── ListaProductos.jsx     # Lista de productos
│   │   │   ├── RegistrarCategoria.jsx # Formulario de categoría
│   │   │   └── RegistrarProducto.jsx  # Formulario de producto
│   │   ├── pages/
│   │   │   └── Home.jsx               # Página principal
│   │   └── services/
│   │       ├── categoriaService.js    # Servicio API categorías
│   │       └── productoService.js     # Servicio API productos
│   └── package.json
└── README.md
```

## 📋 Requisitos Previos

Asegúrate de tener instalado:

- **Java** 17 o superior
- **Node.js** 16 o superior
- **npm** o **yarn**
- **MySQL** 8.0 o superior
- **Maven** 3.6 o superior

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/Vania-0731/springboot-react.git
cd springboot-react
```

### 2. Configurar el Backend

```bash
# Navegar al directorio del backend
cd back

# Instalar dependencias
mvn clean install

# O si prefieres Gradle
./gradlew build
```

### 3. Configurar el Frontend

```bash
# Navegar al directorio del frontend
cd front

# Instalar dependencias
npm install

# O con yarn
yarn install
```

## ⚙️ Configuración

### Base de Datos

1. Crea una base de datos MySQL:

```sql
CREATE DATABASE productos_db;
```

2. Configura `back/src/main/resources/application.properties`:

```properties
# Configuración de la base de datos
spring.datasource.url=jdbc:mysql://localhost:3306/productos_db
spring.datasource.username=tu_usuario
spring.datasource.password=tu_contraseña
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# Configuración JPA
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect

# Puerto del servidor
server.port=8080

# CORS (si es necesario)
spring.web.cors.allowed-origins=http://localhost:3000
```

### Variables de Entorno (Opcional)

Puedes usar variables de entorno para mayor seguridad:

```properties
spring.datasource.url=${DB_URL:jdbc:mysql://localhost:3306/productos_db}
spring.datasource.username=${DB_USERNAME:root}
spring.datasource.password=${DB_PASSWORD:password}
```

## 🎯 Uso

### Iniciar el Backend

```bash
cd back

# Con Maven
mvn spring-boot:run

# Con Gradle
./gradlew bootRun

# El servidor estará disponible en http://localhost:8080
```

### Iniciar el Frontend

```bash
cd front

# Con npm
npm run dev

# Con yarn
yarn dev

# La aplicación estará disponible en http://localhost:3000
```

### Acceder a la Aplicación

1. Abre tu navegador en `http://localhost:3000`
2. Utiliza la interfaz para gestionar productos y categorías
3. Las operaciones CRUD están disponibles para ambas entidades

## 🔌 API Endpoints

### Productos

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/api/v1/productos` | Obtener todos los productos |
| `POST` | `/api/v1/productos` | Crear un nuevo producto |
| `GET` | `/api/v1/productos/{id}` | Obtener producto por ID |
| `PUT` | `/api/v1/productos/{id}` | Actualizar producto |
| `DELETE` | `/api/v1/productos/{id}` | Eliminar producto |

### Categorías

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/api/v1/categorias` | Obtener todas las categorías |
| `POST` | `/api/v1/categorias` | Crear una nueva categoría |
| `GET` | `/api/v1/categorias/{id}` | Obtener categoría por ID |
| `PUT` | `/api/v1/categorias/{id}` | Actualizar categoría |
| `DELETE` | `/api/v1/categorias/{id}` | Eliminar categoría |

### Ejemplo de Request/Response

**POST** `/api/v1/productos`

```json
{
  "nombre": "Laptop Gaming",
  "descripcion": "Laptop para gaming de alta gama",
  "precio": 1299.99,
  "categoriaId": 1
}
```

**Response:**
```json
{
  "id": 1,
  "nombre": "Laptop Gaming",
  "descripcion": "Laptop para gaming de alta gama",
  "precio": 1299.99,
  "categoria": {
    "id": 1,
    "nombre": "Electrónicos"
  }
}
```

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Sigue estos pasos:

1. **Fork** el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un **Pull Request**

### Guías de Contribución

- Asegúrate de que el código siga las convenciones del proyecto
- Añade tests para nuevas funcionalidades
- Actualiza la documentación si es necesario
- Describe claramente los cambios en el PR

## 📝 Scripts Disponibles

### Backend
```bash
mvn spring-boot:run    # Ejecutar la aplicación
mvn test               # Ejecutar tests
mvn clean package      # Crear JAR ejecutable
```

### Frontend
```bash
npm run dev            # Servidor de desarrollo
npm run build          # Build para producción
npm run preview        # Previsualizar build
npm run lint           # Linter
```

## 🐛 Solución de Problemas

### Problemas Comunes

1. **Error de conexión a la base de datos**
   - Verifica que MySQL esté ejecutándose
   - Comprueba las credenciales en `application.properties`

2. **Puerto ya en uso**
   - Cambia el puerto en `application.properties` o mata el proceso

3. **CORS errors**
   - Asegúrate de que la configuración CORS esté correcta

4. **Dependencies not found**
   - Ejecuta `mvn clean install` o `npm install` según corresponda

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 📞 Contacto

**Desarrollador:** Vania
**Repositorio:** [https://github.com/Vania-0731/springboot-react](https://github.com/Vania-0731/springboot-react)

---

⭐ **¡No olvides dar una estrella al proyecto si te ha sido útil!**

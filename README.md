# Task API CodeCraft

Este proyecto muestra una API Node.js simple para administrar tareas,
integrada con Docker para contenerización y Jenkins para canalización CI/CD.

## 🧱 Paso 1: Gestión del Repositorio Git

### 🧩 Inicializar repositorio local
```bash
git init
```

### 🧩 Crear y añadir README.md
```bash
echo "# Task API Project" > README.md
git add README.md
git commit -m "chore: primer commit con README"
```

### 🔗 Conectar con repositorio remoto en GitHub
1. Crear repositorio en GitHub.
2. Luego, enlazarlo con:
```bash
git remote add origin https://github.com/tu-usuario/task-api.git
git push -u origin main
```

✅ ¡Repositorio conectado correctamente!

---

## 🐳 Paso 2: Configuración de la API con Docker (3 puntos)

### 📄 Dockerfile
```dockerfile
# Imagen base oficial con Node.js
FROM node:16

# Crear directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos de definición de dependencias
COPY package*.json ./

# Instalar dependencias necesarias para la API
RUN npm install

# Copiar el resto del código fuente al contenedor
COPY . .

# Exponer el puerto donde la API escuchará
EXPOSE 3000

# Comando por defecto al iniciar el contenedor
CMD ["node", "app.js"]
```

### ▶️ Comandos para ejecutar con Docker
```bash
docker build -t task-api .
docker run -p 3000:3000 task-api
```

### 📋 Rutas disponibles
- `GET /tasks` → Retorna lista de tareas.
- `GET /tasks/:id` → Retorna una tarea específica por ID.

---

## 🔄 Paso 3: Pipeline de Jenkins

### 🛠️ Requisitos previos
- Jenkins instalado (local o en servidor).
- Plugin: Docker, Git.
- Configuración de credenciales GitHub (token si es privado).

### 📁 Jenkinsfile explicativo
```groovy
pipeline {
    agent any

    stages {
        stage('Clonar Repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/FelipeCarillancaDev/CodeCraft.git'
            }
        }

        stage('Instalar Dependencias') {
            steps {
                bat 'npm install'
            }
        }

        stage('Ejecutar Pruebas') {
            steps {
                bat 'npm test'
            }
        }

        stage('Construir Imagen Docker') {
            steps {
                bat 'docker build -t my-api-tasks .'
            }
        }

        stage('Ejecutar Contenedor') {
            steps {
                bat 'docker run -d -p 3000:3000 --name my-api-container my-api-tasks'
            }
        }
    }
}

```
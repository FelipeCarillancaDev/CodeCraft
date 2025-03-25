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

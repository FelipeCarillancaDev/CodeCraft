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
    }
}

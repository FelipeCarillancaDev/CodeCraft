# Informe de ejecución del pipeline Proyecto CodeCraft

## Resumen

Este informe describe los pasos tomados para configurar y ejecutar la canalización CI/CD
para el proyecto de API de tareas.

## Pasos

1. **Creación del Repositorio**

    - Se inicializa el repositorio en GitHub. y se suben los archivos del proyecto.
    - https://github.com/FelipeCarillancaDev/CodeCraft

2. **Integración con Docker**

    - Se creó un Dockerfile para contener la aplicación.

3. **Configuración de Jenkins**

    - Se configura Jenkins para automatizar el proceso de compilación, prueba e implementación.
   - ![jenkins.jpg](images/jenkins.jpg)
   
## Errores encontrador
- Se encontro un error al ejecutar el pipeline en Jenkins. Debido a estar usando S.O Windows. hay que configurar el archivo
  Jenkinsfile usando bat en lugar de sh.
- ![jenkins(3).jpg](images/jenkins%283%29.jpg)

## Resultados
   
- Resultados de la ejecución del pipeline
   - ![jenkins  (1).jpg](images/jenkins%20%20%281%29.jpg)
   - ![jenkins  (2).jpg](images/jenkins%20%20%282%29.jpg)
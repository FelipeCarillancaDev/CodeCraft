# Task API Project

Este proyecto muestra una API Node.js simple para administrar tareas,
integrada con Docker para contenerización y Jenkins para canalización CI/CD.

## Features

- List all tasks
- Get task by ID

## Running Locally

1. Install dependencies: `npm install`
2. Start the server: `npm start`

## Running with Docker

1. Build the image: `docker build -t task-api .`
2. Run the container: `docker run -p 3000:3000 task-api`


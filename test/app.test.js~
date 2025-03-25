const request = require('supertest');
const app = require('../app'); // Importa el archivo de app sin iniciar el servidor
const http = require('http');

describe('Tasks API', () => {
    let server;

    beforeAll(() => {
        // Inicia el servidor antes de ejecutar las pruebas
        server = http.createServer(app);
        server.listen(3000);
    });

    afterAll(() => {
        // Cierra el servidor después de las pruebas
        server.close();
    });

    // Test GET /tasks
    it('should return all tasks', async () => {
        const response = await request(app).get('/tasks');
        expect(response.status).toBe(200);
        expect(response.body).toEqual([
            {
                "id": 1,
                "name": "Task 1"
            },
            {
                "id": 2,
                "name": "Task 2"
            }
        ]);
    });

    // Test GET /tasks/:id
    it('should return a task by ID', async () => {
        const response = await request(app).get('/tasks/1');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({id: 1, name: 'Task 1'});
    });

    // Test GET /tasks/:id with a non-existing task
    it('should return 404 if task is not found', async () => {
        const response = await request(app).get('/tasks/999');
        expect(response.status).toBe(404);
        expect(response.text).toBe('Task not found');
    });
});

const request = require('supertest');
const app = require('../app');

describe('Tasks API', () => {
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

    it('should return a task by ID', async () => {
        const response = await request(app).get('/tasks/1');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({id: 1, name: 'Task 1'});
    });

    it('should return 404 if task is not found', async () => {
        const response = await request(app).get('/tasks/999');
        expect(response.status).toBe(404);
        expect(response.text).toBe('Task not found');
    });
});

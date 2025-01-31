const request = require('supertest');
const app = require('./app').app;
const build = require('./app').itemBuilder;

// unit testing the item builder
describe('Unit Tests', () => {

    test('item object builder', () => {
<<<<<<< HEAD
        expect(build('first item', 'test item', 5, 1))
        .toMatchObject(
            {
                name : 'first item',
                description : 'test item',
                price : 5,
=======
        expect(build('my first item', 'a test item', 4, 1))
        .toMatchObject(
            {
                name : 'my first item',
                description : 'a test item',
                price : 4,
>>>>>>> 4f8601e930cc1fee4f9df22b31e423db955fc27a
                _id : 1
            }
        );
    });

});

describe('CREATE request', () => {
    
    test('CREATE item test, expect 201', async () => {
        const res = await request(app)
                            .post('/create')
                            .send({
                                name : "test item",
                                description : "test description",
                                price : 99
                            });
        expect(res.statusCode).toBe(201);
    });

});

describe('READ requests', () => {
    
    test('GET /read endpoint, expect 200', async () => {
        const res = await request(app).get('/read')
        expect(res.statusCode).toBe(200);
    });

    test('GET /bad endpoint, expect 404', async () => {
        const res = await request(app).get('/bad')
        expect(res.statusCode).toBe(404);
    });
<<<<<<< HEAD
    // time to create a bad endpoint test (404)
=======
    
    test('GET /read/1 endpoint, expect 200', async () => {
        const res = await request(app).get('/read/1')
        expect(res.statusCode).toBe(200);
    });
>>>>>>> 4f8601e930cc1fee4f9df22b31e423db955fc27a

});

describe('UPDATE request', () => {
    
<<<<<<< HEAD
    test('CREATE item test, expect 201', async () => {
        const res = await request(app)
                            .post('/create')
                            .send({
                                name : "test item",
                                description : "test description",
                                price : 99
                            });
        expect(res.statusCode).toBe(201);
=======
    test('UPDATE item test, expect 200', async () => {
        const res = await request(app)
                            .put('/update/1')
                            .send({
                                name : "updated item",
                                description : "updated description",
                                price : 0
                            });
        expect(res.statusCode).toBe(200);
    });

});

describe('DELETE requests', () => {
    
    test('DELETE /delete/1 endpoint, expect 200', async () => {
        const res = await request(app).delete('/delete/1')
        expect(res.statusCode).toBe(200);
>>>>>>> 4f8601e930cc1fee4f9df22b31e423db955fc27a
    });

});
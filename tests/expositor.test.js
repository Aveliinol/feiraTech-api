const { sequelize } = require('../database/config/configDB');
const request = require('supertest');
const app = require('../index');
const Expositor = require('../src/modules/expositor/models/expositor.model');

beforeAll(async () => {
    await sequelize.sync({ force: true })
});

afterAll(async () => {
    await sequelize.close();
});

afterEach(async () => {
    await Expositor.truncate();
});

describe('Testes de Expositor - POST', () =>{
    test('Criar expositor com sucesso', async () => {
        const res = await request(app).post('/expositor').send({ 
            nome:'Vandal', 
            email:'Vandal123@gmail.com', 
            instituicao:'vitta' })
        expect(res.status).toBe(201);
        expect(res.body.msg).toBe("Expositor cadastrado com sucesso");
    });
})
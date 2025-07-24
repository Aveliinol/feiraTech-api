const express = require('express');
const { sequelize } = require('./database/config/configDB');
require('dotenv').config();
const expositorRouter = require('./src/modules/expositor/routes/expositor.route');

const app = express();
const PORT = process.env.PORT

app.use(express.json());

app.use('/expositor', expositorRouter);

app.listen(PORT, ()=>{
    console.log(`aplicação rodando em http://localhost:${PORT}`); 
})

module.exports = app;
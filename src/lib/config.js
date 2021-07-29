require('dotenv').config();

const environment = process.env.ENVIRONMENT || 'development';

const database = {
    dialect:process.env.dialect,
    host: process.env.dbhost,
    port: process.env.dbport || 3306,
    database: process.env.database,
    username: 'root',
    password: 'Mallikamani10@',
}

module.exports = {database,environment};
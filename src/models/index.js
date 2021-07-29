const fs = require('fs');
const path = require('path');
const config =  require('./../lib/config');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);


//configuration

const sequelize = new Sequelize(config.database);

if (config.database.dialect === 'mysql') {
    sequelize
      .query("SHOW STATUS LIKE 'Ssl_cipher'", { type: sequelize.QueryTypes.SELECT })
      .then((result) => console.log('DB SSL CIPHER: ', result[0].Value || '-'));
  }

const db = {};

fs.readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'))
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
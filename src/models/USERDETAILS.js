const Sequelize = require('sequelize');

module.exports = function(sequelize,DataTypes){
    let userdetail =  sequelize.define('USERDETAILS',{
        id:{
            autoIncrement:true,
            type: DataTypes.INTEGER,
            primaryKey:true
        },
        name:{
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        status:{
            type: DataTypes.STRING(45),
            allowNull: false,
        }
    },{
        sequelize,
        tablename:'userdetails',
        timestamps: false,
    });

    return userdetail;
}
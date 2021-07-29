const db = require('./../../models/index');
const { QueryTypes } = require('sequelize');

exports.userDetails = async()=>{
    // var query = "SELECT * FROM learning.userdetails";

    // const data = await db.sequelize.query(query,{
    //     type: db.sequelize.QueryTypes.SELECT,
    // })

    const data = await db.USERDETAILS.findAll({
        where:{
            status:'active'
        }
    })
    return data;
}
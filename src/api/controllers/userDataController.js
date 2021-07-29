const services = require('./../services/userDetails.service');

exports.getUserData = async(req,res,next)=>{
    let userData = [
        { id:1, name:"manikandan", age:24},
        { id:2, name:"suresh raina", age:34},
        { id:3, name:"ms dhoni", age:40},
        { id:4, name:"kane williamson", age:30},
        { id:5, name:"Faf du plessis", age:36},
        { id:6, name:"KL Rahul", age:28},
        { id:7, name:"Bhuvaneshvar kumar", age:30},
        { id:8, name:"Mayank agarwal", age:30},
        { id:9, name:"rishabh pant", age:24},
        { id:10, name:"harleen deol", age:24}
    ];

    let finalData = [];

    var offset = req.params.offset;
    var count = req.params.count;

    userData.splice([offset],[count]).map((item,i)=>{
        finalData.push(item);
    })

    return res.json(finalData);
}


exports.getUserDetails = async(req,res,next)=>{
    const getDetails =  await services.userDetails();

    return res.json(getDetails);
}
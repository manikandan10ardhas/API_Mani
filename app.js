const app =  require('./src/config/express');
const config =  require('./src/lib/config');

app.listen(3002,()=>{
    console.log("server running on port 3002");
})


module.exports = app;
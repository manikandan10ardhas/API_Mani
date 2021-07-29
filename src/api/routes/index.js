const express = require('express');
const router =  express.Router();

const userDataRoutes =  require('./../routes/userDataRoutes');

router.use('/user',userDataRoutes);

module.exports =  router;
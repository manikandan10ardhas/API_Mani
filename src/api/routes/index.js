const express = require('express');
const router =  express.Router();

const userDataRoutes =  require('./../routes/userDataRoutes');

router.use('/users',userDataRoutes);

module.exports =  router;
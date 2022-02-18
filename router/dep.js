
const express = require('express')
const router = express.Router();
const Controller = require('../controller/dep');
const validation=require('../validations/dep');
router.post('/dep',validation,Controller);
module.exports=router;
const express = require('express')
const contacts = express.Router();

function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}



module.exports = contacts
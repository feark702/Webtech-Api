const express = require('express')
const contacts = express.Router();

function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

var contact1 = [
    {
        id:1,
        First_Name:'Adisak',
        Last_Name:'Wongkingsri',
        email: '56660202@go.buu.ac.th'
    },
    {
        id:2,
        First_Name:'Nattawat',
        Last_Name:'Viengthong',
        email: '56660003@go.buu.ac.th'
    },
    {
        id:3,
        First_Name:'Thanakorn',
        Last_Name:'Ngamsamer',
        email: '56660124@go.buu.ac.th'
    }
]

module.exports = contacts
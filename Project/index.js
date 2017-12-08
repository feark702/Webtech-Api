const express = require('express')
const contacts = express.Router();

function IsNullOrWhiteSpace(str) {
        if (str == null) return true;
        return str.replace(/\s/g, '').length == 0;
    }

var contact = [
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

contacts.post('/contacts',(req,res) => {
    let list = req.body
    let text = []
    if(!IsNullOrWhiteSpace(list.First_Name) && (!IsNullOrWhiteSpace(list.email))){
        contact1.push(list)
        res.json("เพิ่มข้อมูลสำเร็จ")
    }
    else{
        res.send("FirstName And Email isEmptry.")
    }
})

module.exports = contacts
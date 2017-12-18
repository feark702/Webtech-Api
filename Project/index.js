const express = require('express')
const contacts = express.Router();
const bodyParser = require('body-parser')



function IsNullOrWhiteSpace(str) {
    if (str == null) return true;
    return str.replace(/\s/g, '').length == 0;
}

var Contact = [
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

//get contacts
contacts.get('/contacts',(req,res) => {
    res.json(Contact)
}
)


//search and get by id
contacts.get('/contacts/:id', (req, res) => {
    let id = req.params.id;
    let count = 0;
    for(let i=0;i<Contact.length;i++){
        if(id == Contact[i].First_Name)
        {
          res.json(Contact[i])
          count++;
        }
    }
    if(count == 0){
     res.json(Contact[id-1])
    }
    
})

//put contacts by id
contacts.put('/contacts/:id',(req,res) =>{
    let contactId = req.params.id;
    
    let contact = Contact.filter(contact => {
        return contact.id == contactId;
      })[0];
    
      const index = Contact.indexOf(contact);
    
      let keys = Object.keys(req.body);
    
      keys.forEach(key => {
        contact[key] = req.body[key];
      });
    
      Contact[index] = contact;
    
      
    res.json(Contact[index]);
})


//post contacts
contacts.post('/contacts',(req,res) => {
    const list = {
                id: Contact.length+1,
                First_Name: req.body.First_Name,
                Last_Name: req.body.Last_Name,
                email : req.body.email
                 }

    if(!IsNullOrWhiteSpace(list.First_Name) && (!IsNullOrWhiteSpace(list.email))){
        
        
        Contact.push(list)
        res.json("เพิ่มข้อมูลสำเร็จ")
    }
    else{
        res.send("FirstName And Email isEmptry.")
}
})

//delete by id
contacts.delete('/contacts/:id',(req,res) =>{
    let Contact_Id = req.params.id;
    
    let contact = Contact.filter(contact => {
        return contact.id == Contact_Id;
    })[0];
    
      const index = Contact.indexOf(contact);
    
      Contact.splice(index, 1);
    
      res.json({ message: `User ${Contact_Id} deleted.`});
    
})


//delete by name
contacts.delete('/contacts/:First_Name',(req,res) =>{
    let First_Name= req.params.First_Name
    for(let i=0;i<Contact.length;i++)
    {
        if(First_Name == Contact[i].First_Name)
        {
            Contact.splice(i,1)
        }
    }
    res.json("Success delete!!")
})




module.exports = contacts


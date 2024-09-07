const {Client}=require('pg')

  const con=new client({
host:"localhost",
user:"postgres",
port:5432,
password:"Nandini1234",
database:"Mydb",

})
con.connect().then(()=>console.log("connected"))
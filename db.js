const mysql = require("mysql2/promise");

const pool=mysql.createPool({
  host:"localhost",
  user:"my_user",
  password:"my_password",
  database:"my_database",
  waitForConnections:true,
  connectionLimit:10

})

module.exports=pool;
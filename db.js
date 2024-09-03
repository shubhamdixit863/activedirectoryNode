const mysql = require("mysql2/promise");

async function dbConnection() {
  try {
    // create the connection to database
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "test",
    });

    return connection;
  } catch (err) {
    
    //console.log(err);
    throw new Error(err)
  }
}

module.exports=dbConnection

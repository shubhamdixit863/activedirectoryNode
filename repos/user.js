const db=require("../db");

async function GetUsers(){
    try {
      const rows=  await db.query("select * from users");
      //console.log("Db Query SuccessFul we go rows",rows[0]);
        return rows[0];
    } catch (error) {
        console.log(error);
        
    }


}

module.exports={
    GetUsers
}
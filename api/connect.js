import mysql from "mysql"

export const db = mysql.createConnection({

host:"localhost",
user:"root",
password:"Narbonne201814",
database:"Groupomania"
})

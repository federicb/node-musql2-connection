const mysql = require('mysql')
const {URL, USUARIO, PASSWORD, DATABASE} = require('./config')
// console.log(URL)
// console.log(USUARIO)
// console.log(PASSWORD)
// console.log(DATABASE)

module.exports = () => {
    return mysql.createConnection({
        host: URL,
        user: USUARIO,
        password: PASSWORD,
        database: DATABASE
    })
}

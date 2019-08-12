const conn = require('../configs/db')

module.exports = {
    insertUser: (data, callback) => {

        conn.query('INSERT user SET ?', data, (err, result) => {
            if (err) console.log(err)
            callback(err, result)
        })
    },
    insertUserPromise: (data) => {
        return new Promise((resolve, reject) => {
            conn.query('INSERT user SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    getData: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM user', (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    }
}
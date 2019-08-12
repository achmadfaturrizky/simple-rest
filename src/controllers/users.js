const modelUsers = require('../models/users')

module.exports = {
    getAll: (req, res) => {

        modelUsers.getData()
            .then(result => res.json(result))
            .catch(err => console.log(err))

    },
    insertData: (req, res) => {
        const data = {
            name: req.body.name,
            location: req.body.location,
            created_at: new Date(),
            updated_at: new Date()
        }

        // Callback
        // modelUsers.insertUser(data, (errUser, resultUser) => {
        //     res.json(resultUser)
        // })

        modelUsers.insertUserPromise(data)
            .then(result => res.json(result))
            .catch(err => console.log(err))
    }
}
const axios = require('axios')

module.exports = {
    registerUser: (req,res)=>{
        const db = req.app.get('db');
        const {username, password, picture} = req.body

        db.create_user([username, password, picture]).then(user => {
            res.status(200).send(user)
        })
    },
    loginUser: (req,res) => {
        const db = req.app.get('db');
        const {username, password} = req.body

        if(req.user){
            db.login_user([username, password]).then( user => {
                res.status(200).send(user)  
            })
        } else {
            res.status(401).send('this user doesnt exist')
        }
    }
}
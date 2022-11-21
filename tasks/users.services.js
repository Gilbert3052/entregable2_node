

const taskControllers = require('./users.controllers')


const getAllUsers = (req, res) => {
    const data = taskControllers.findAllUsers()
    res.status(200).json(data)
}

const getUserById = (req, res) => {
    const id = req.params.id
    const data = taskControllers.findUserById(id)
    if(data){
        res.status(200).json(data)
    }else {
        res.status(404).json({message: 'Invalid ID'})
    }
}

const postUser = (req, res) => {
    const {first_name, last_name, email, password, birthday} = req.body
    if(first_name && last_name && email && password && birthday){
        const data = taskControllers.createUser(req.body)
        res.status(201).json(data)
    }else {
        res.status(400).json({message: 'Invalid Data', fields: {first_name: 'String', last_name: 'String', email: 'String', password: 'String', birthday: 'String'}})
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    postUser
}

const userDB = []

//* {
//*     id: 3,
//*     first_name: Gilbert,
//*     last_name: Angulo,
//*     email: gilbert@mail.com,
//*     password: 123456789,
//*     birthday: 'YYYY/MM/DD'
//* }

let id = 1

const findAllUsers = () => {
    return userDB
}

const findUserById = (id) => {
    const user = userDB.find(item => item.id == id)
    return user
}

const createUser = (data) => {
    const newUser = {
        id: id++,
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        birthday: data.birthday
    }
    userDB.push(newUser)
    return userDB
}

module.exports = {
    findAllUsers,
    findUserById,
    createUser
}
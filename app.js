const express = require('express')
const taskRouter = require('./tasks/users.router')

const port = 9000

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: 'OK'
    })
})

app.use('/', taskRouter)

app.listen(port, () => {
    console.log(`Server Started at ${port}`);
})
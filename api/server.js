const express = require('express')
const server = express()

const jokesRouter = require('../api/jokes/jokesRouter')

server.use(express.json()) 

server.use('/jokes', jokesRouter)

server.use('*', (req, res) => {
    res.json({api: 'up'})
})

module.exports = server
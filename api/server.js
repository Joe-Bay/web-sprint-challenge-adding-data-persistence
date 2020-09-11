const express = require('express')
const projectRouter = require('../projects/projects-router')
const helmet = require('helmet')

const server = express()
server.use(helmet())
server.use(express.json())
server.use('/api/projects', projectRouter)

server.get('/', (req, res) => {
    res.status(200).json({message: "The server is up"})
})

module.exports = server
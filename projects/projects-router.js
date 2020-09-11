const express = require('express')
const Projects = require('./projects-model')
const router = express.Router()

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
})

router.get('/tasks', (req, res) => {
    Projects.getTasks()
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(err => res.status(500).json({ message: err.message }))
})

router.get('/resources', (req, res) => {
    Projects.getTasks()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => res.status(500).json({ message: err.message }))
})

router.post('/', (req, res) => {
    const project = req.body
    project.ProjectName ? 
    Projects.addProject(project)
    .then(id => {
        res.status(201).json(id)
    })
    .catch(err => res.status(500).json({ message: err.message }))
    : res.status(400).json({message: 'Please fill in the name field'})
})


module.exports = router
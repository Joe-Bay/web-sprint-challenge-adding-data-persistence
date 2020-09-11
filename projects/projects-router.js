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
    Projects.getResources()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => res.status(500).json({ message: err.message }))
})
router.get('/:id/tasks', (req, res) => {
    Projects.getProjectAndTask(req.params.id)
    .then(project => {
        res.status(200).json(project)
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
router.post('/:id/resources', (req, res) => {
    const id = req.params.id
    const resource = req.body
    Projects.addResource(resource, id)
    .then(ids => {
        res.status(201).json(ids)
    })
    .catch(err => res.status(500).json({message: err.message}))
})
router.post('/:id/tasks', (req, res) => {
    const id = req.params.id
    const task = req.body
    Projects.addTask(task, id)
    .then(ids => {
        res.status(201).json(ids)
    })
    .catch(err => res.status(500).json({message: err.message}))
})


module.exports = router
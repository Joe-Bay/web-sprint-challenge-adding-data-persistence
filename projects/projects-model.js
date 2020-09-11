const db = require('../data/connection')

module.exports = {
    getProjects,
    getProjectById,
    addResource,
    addProject,
    addTask,
    getResources,
    getTasks
}

function getProjects(){
    return db('Projects')
}

function getProjectById(id) {
    return db('Projects').where({ id })
}
function getResources(){
    return db('Resources')
}
function getTasks(){
    return db('Tasks')
}

function addResource(resource, id){
    return db('Resources').insert(resource).where({ project_id: id})
}
function addProject(project){
    return db('Projects').insert(project)
}
function addTask(task, id){
    return db('Tasks').insert(task).where({ projectId: id })
}


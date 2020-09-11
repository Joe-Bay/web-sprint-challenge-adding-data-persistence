
exports.up = function(knex) {
  return knex.schema.createTable('Projects', tbl => {
      tbl.increments()
      tbl.string('ProjectName', 128).notNullable()
      tbl.string('ProjectDescription', 256)
      tbl.boolean('ProjectCompletion').defaultTo(false)
  })
  .createTable('Resources', tbl => {
    tbl.increments()
    tbl.string('ResourceName', 128).notNullable().unique()
    tbl.string('ResourceDescription', 256)
    tbl.integer('project_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('Projects')
    .onDelete('RESTRICT')
    .onUpdate('CASCADE')
  })
  .createTable('Tasks', tbl => {
    tbl.increments()
    tbl.string('TaskDescription', 256).notNullable()
    tbl.string('TaskNotes', 256)
    tbl.boolean('TaskCompletion').defaultTo(false).notNullable()
    tbl.integer('projectId')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('Projects')
    .onDelete('RESTRICT')
    .onUpdate('CASCADE')
})
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Tasks')
  .dropTableIfExists('Resources')
  .dropTableIfExists('Projects')
};

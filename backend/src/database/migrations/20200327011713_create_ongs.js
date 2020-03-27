//O que eu quero que seja feito (crio uma tabela)
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary()
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('whatsapp').notNullable()
        table.string('city').notNullable()
        table.string('uf', 2).notNullable()
    })
  };
  
  //O que acontece se der errado (apago a tabela)
  exports.down = function(knex) {
    return knex.schema.dropTable('ongs')
  };
  
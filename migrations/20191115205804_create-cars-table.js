exports.up = function(knex) {
  //Change we want to make to schema
  return knex.schema.createTable("cars", table => {
    table.increments();
    table
      .text("vin")
      .unique()
      .notNullable();
    table.text("make").notNullable();
    table.text("model").notNullable();
    table.integer("milage").notNullable();
    table.text("transmission");
    table.text("title");
  });
};

exports.down = function(knex) {
  // Undoing changes to a schema
  return knex.schema.dropTableIfExists("cars");
};

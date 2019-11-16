exports.seed = function(knex) {
  // Deletes ALL existing entries and resets primary keys
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "123abc",
          make: "Honda",
          model: "Fit",
          milage: 200000,
          transmission: "auto",
          title: "clean"
        },
        {
          vin: "345def",
          make: "Nissan",
          model: "Sentra",
          milage: 80000,
          transmission: "auto",
          title: "clean"
        }
      ]);
    });
};

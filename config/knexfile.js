const knex = require("knex")({
  client: "pg",
  connection: {
    host: "ep-dawn-union-87705375.us-east-2.aws.neon.tech",
    user: "pineyroluciano",
    port: 5432,
    password: "gSrGOsF4jvN9",
    database: "neondb",
    ssl: {
      require: true,
    },
  },
});

module.exports = knex;

const pg = require('pg');

let pool = new pg.Pool({
  database: "weekend-to-do-app"
});

module.exports = pool;
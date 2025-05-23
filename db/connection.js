const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'hostname',
  user: process.env.DB_USER || 'username',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'dbname',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;

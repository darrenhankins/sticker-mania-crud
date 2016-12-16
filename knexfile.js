// Update with your config settings.
requiere('dotenv').load();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/sticker-mania'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};

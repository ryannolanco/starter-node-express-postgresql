const path = require('path');
require('dotenv').config();
const { DATABASE_URL } = process.env;

module.exports = {
	development: {
		client: 'pg',
		connection: DATABASE_URL,
		migrations: {
			directory: path.join(__dirname, 'src', 'db', 'migrations'),
		},
		seeds: {
			directory: path.join(__dirname, 'src', 'db', 'seeds'),
		},
	},
};

const server = require('./config/server.js')
require('./config/database')
require('./config/routes')(server)
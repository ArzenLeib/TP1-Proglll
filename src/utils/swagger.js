const swaggerAutogen = require('swagger-autogen')();
require('dotenv').config()
const doc = {
  
  info: {
    title: 'PIII- test',
    description: 'Aplicacion inicial de backend',
  },
   host: 'localhost:'+process.env.PORT
};

const outputFile = '../../swagger-output.json';
const routes = [
  

  "src/modules/proyecto/proyecto.routes.js",
  "src/modules/user/user.routes.js",
];

swaggerAutogen(outputFile, routes, doc);


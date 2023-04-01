"use strict";

const express = require("express");
const app = express();

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

//Swagger documentation
const swaggerOptions = {
    swaggerDefinition:{
        info:{
            version: "1.0.0",
            title: "Note Api",
            description: "Api Documentation for use",
            contact:{
                name: "Javier",
                url: "javierrojas"
            },
            servers: ["http://localhost:4000"]
        }
    },
    basePath: "/",
    //Apis a documentar
    apis: ["./../notes.router"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/",swaggerUI.serve, swaggerUI.setup(swaggerDocs));

module.exports = app;
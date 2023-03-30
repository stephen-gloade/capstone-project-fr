"use strict";
const express = require("express");
const morgan = require("morgan");
const { allSportsHandler } = require("./handlers/allSportsHandler");

// IMPORT HANDLERS
const { getHome } = require("./handlers/homeHandler")

const PORT = 4000;

express()
    .use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Methods",
            "OPTIONS, HEAD, GET, PUT, POST, DELETE"
        );
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
        );
        next();
})
    .use(morgan("tiny"))
    .use(express.static("./server/assets"))
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use("/", express.static(__dirname + "/"))



    .get("/home", getHome)
    .get("/sports", allSportsHandler)

    .listen(PORT, () => console.info(`Listening on port ${PORT}`));
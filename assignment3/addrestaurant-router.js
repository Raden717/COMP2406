const config = require("./config.json");
const express = require('express');
const path = require('path');
const fs = require("fs");
let router = express.Router();


router.get("/addrestaurant",loadPage);

//Loads the page addrestaurant
function loadPage(req, res, next){
	res.format({
		//"text/html": () => {res.render("pages/restaurants", createData(res.restaurants, req))},
		"text/html": () => {res.render("pages/addrestaurant")},
		"application/json": () => {res.status(200).json(res.addrestaurant)}
	});
	next();
}

//Add restaurants
function addRest(req,res,next){
  //
}


module.exports = router;

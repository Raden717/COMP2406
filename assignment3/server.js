const express = require('express');
const app = express();
const config = require("./config.json");
const path = require('path');
const fs = require("fs");

app.set("view engine", "pug");

app.get("/", (req, res, next)=> { res.render("pages/index"); });

//Add restaurant router
let addrestaurantRoute = require("./addrestaurant-router.js");
app.get("/addrestaurant", addrestaurantRoute);

//Loading and responding the restaurants onto the page
app.get("/restaurants/", loadRestaurants, respondRestaurants);


//Loading and responding specific restaurants
app.get("/restaurants/:id", getRestaurant, sendSingleProduct);

function loadRestaurants(req, res, next){
  let results = [];
	let startIndex = (req.query.page-1) * Number(req.query.limit);
	let endIndex = startIndex + Number(req.query.limit);
	let countLoaded = 0;
	let failed = false;

	//Read all files in the directory
	fs.readdir(path.join(".", config.restaurantsDir), function(err, items) {
		let count = 0;
		for (let fileNum=0; fileNum < items.length; fileNum++) {
			let data = fs.readFileSync(path.join(".", config.restaurantsDir, items[fileNum]));
			let restaurant = JSON.parse(data);
			results.push(restaurant);

				count++;
			}


		//Set the property to be used in the response
		res.restaurants = results;
		next();
	});
}

//L:o
function respondRestaurants(req, res, next){
	res.format({
		"text/html": () => {res.render("pages/restaurants", {restaurants: res.restaurants, qstring: req.qstring, current: req.query.page } )},
		"application/json": () => {res.status(200).json(res.restaurants)}
	});
	next();
}

//Gets the specific restaurant and loads it
function getRestaurant(req, res, next){
	let id = req.params.id;
	let restaurantName;
	let fileName;

	fs.readdir(path.join(".", config.restaurantsDir), function(err, items) {
		let count = 0;
		//For each product file
		for (let fileNum=0; fileNum < items.length; fileNum++) {
			//Read the restaurants data and create an object
			let data = fs.readFileSync(path.join(".", config.restaurantsDir, items[fileNum]));
			let restaurant = JSON.parse(data);
			if(restaurant.id == id){
				if(fs.existsSync(".", config.restaurantsDir, items[fileNum])){
					req.restaurant = restaurant;
					next();
				}else{
					res.status(404).send("Could not find user.");
				}
			}

				count++;
			}

	});
}

//Loading the restaurant page for a specific one
function sendSingleProduct(req, res, next){
	res.format({
		"application/json": function(){
			res.status(200).json(req.restaurant);
		},
		"text/html": () => { res.render("pages/restaurant", {restaurant: req.restaurant}); }
	});

	next();
}

app.listen(3000);
console.log("Server listening at http://localhost:3000");

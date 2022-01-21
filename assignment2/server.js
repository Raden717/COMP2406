const http = require('http');
const fs = require('fs');
const ejs = require('ejs');


function readJSON(x){
  const contents = fs.readFileSync(x, 'utf8');
  return JSON.parse(contents);
}

//Function to easily do GET requests for html/js files
function getFILE(filename,type,response){
  return fs.readFile(filename,function (err, data){
    if(err){
      response.statusCode = 500;
      response.end("Error read");
      return;
    }
    response.statusCode = 200;
    response.setHeader("Content-Type", type);
    response.end(data);
  });
}

//TODO Read list of files from restaurants directory so it's easier to expand upon
const files = ["./restaurants/aragorn.json","./restaurants/frodo.json","./restaurants/legolas.json"];


const restaurants = {};

//Reads through restaurant JSON files
for(let i = 0; i < files.length ; ++i){
  const obj = readJSON(files[i]);
  restaurants[obj.name] = obj;
}

//Keys for each restaurant for easier calls
const restKEYS = Object.keys(restaurants);

//Objects needed to create stats page
const totalOrders = {};
const orderSum = {};
const mostPop = {};
const itemsSOLD = {};
const averageORDER = {};

//Creating a restaurant key for each restaurant in each objects
for(let i = 0; i < restKEYS.length; ++i){
  totalOrders[restKEYS[i]] = 0;
  orderSum[restKEYS[i]] = 0;
  averageORDER[restKEYS[i]] = 0;
  mostPop[restKEYS[i]] = "";
  itemsSOLD[restKEYS[i]] = {};
}

//Stats info
let statsINFOARA = [
averageORDER[restKEYS[0]],
totalOrders[restKEYS[0]],
mostPop[restKEYS[0]],
]

let statsINFOFRO = [
averageORDER[restKEYS[1]],
totalOrders[restKEYS[1]],
mostPop[restKEYS[1]],
]

let statsINFOLEGO = [
averageORDER[restKEYS[2]],
totalOrders[restKEYS[2]],
mostPop[restKEYS[2]],
]

//Main server
const server = http.createServer(function (request, response) {

  console.log('Requesting... ' + request.url);
  //Get requests
  if(request.method === "GET"){
    if(request.url === "/"){
      getFILE("home.html","text/html",response);
    }else if (request.url.endsWith('.html')){
      getFILE(request.url.slice(1),'text/html',response);
    }else if (request.url.endsWith('.js')){
      getFILE(request.url.slice(1),'application/javascript',response);
    } else if (request.url.endsWith('.jpg')){
      getFILE(request.url.slice(1),'image/jpg',response);
    } else if (request.url.endsWith('.ejs')){ //Rendering ejs
      ejs.renderFile("./pages/stats.ejs", {restKEYS,statsINFOARA,statsINFOFRO,statsINFOLEGO}, {}, function(err, data){
        if(err){
          console.log(err);
          return;
        }

        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html");
        response.end(data);
        return;
      });
    } else if (request.url === "/restaurants"){ //Used to recieve a the restaurants object into the JS code
      response.statusCode = 200;
      response.setHeader("Content-type","application/json");
      response.end(JSON.stringify(Object.keys(restaurants)));
    } else if (request.url.startsWith("/restaurants/")){ //Used to obtain EACH restaurant
      const restaurantNAME = decodeURI(request.url.slice(13));
      if(restaurants.hasOwnProperty(restaurantNAME)){
        response.statusCode = 200;
        response.setHeader("Content-type","application/json");
        response.end(JSON.stringify(restaurants[restaurantNAME]));
      } else {
        response.statusCode = 404;
        response.setHeader("Content-type","plain/text");
        response.end("restaurant not found");
      }

  }else{ //ERROR CHECK
		response.statusCode = 404;
		response.end("Unknown resource.");
	}

} else if ( request.method === "POST"){ //Post requests
    if(request.url === "/order"){
      let body = "";
      request.on('data', (chunk) => {
        body += chunk;
      })
      request.on('end', () => {
        const orderSum = JSON.parse(body);

        Object.keys(orderSum).forEach((item) => {//Looping through each item to add into total items sold list for certain restaurantts
            if(item != "Subtotal" && item != "curRestaurant"){
              if(itemsSOLD[orderSum["curRestaurant"]].hasOwnProperty(item)){
                itemsSOLD[orderSum["curRestaurant"]][item] += orderSum[item];
              } else {
                itemsSOLD[orderSum["curRestaurant"]][item] = orderSum[item];
              }
            }

        });
        update(orderSum["curRestaurant"],orderSum["Subtotal"],orderSum); //Updates all objects for stats

        response.statusCode = 201;
        response.write(JSON.stringify(JSON.parse(body)));
        response.end();
      })
    }
    }
  }
);

//Update function to update all stat object elements
function update(restaurant,subtotal,orderSUM){
  if(restaurants.hasOwnProperty(restaurant)){
    let popularITEM = "";
    Object.keys(itemsSOLD[restaurant]).forEach((item) => {
      if(popularITEM === ""){
        popularITEM = item;
      } else {
        if(itemsSOLD[restaurant][item] > itemsSOLD[restaurant][popularITEM]){
          popularITEM = item;
        }
      }
    });


    orderSum[restaurant] += +subtotal;
    totalOrders[restaurant]++;
    mostPop[restaurant] = popularITEM;
    averageORDER[restaurant] = (orderSum[restaurant]/totalOrders[restaurant]).toFixed(2);
    updateSTATS();
  } else {
    console.log("Restuarant doesn't exist");
  }
}

//Update function to update all stat objects
function updateSTATS(){
  statsINFOARA = [
  averageORDER[restKEYS[0]],
  totalOrders[restKEYS[0]],
  mostPop[restKEYS[0]],
  ]

  statsINFOFRO = [
  averageORDER[restKEYS[1]],
  totalOrders[restKEYS[1]],
  mostPop[restKEYS[1]],
  ]

  statsINFOLEGO = [
  averageORDER[restKEYS[2]],
  totalOrders[restKEYS[2]],
  mostPop[restKEYS[2]],
  ]
}

server.listen(3000);
console.log('Server running at... 3000');

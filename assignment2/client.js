//The definition of the menu items are left so that the base code works.
//You should remove these for your A2 implementation, as all data should come from the server


//This should also be removed. The restaurant names should also come from the server.
let restaurants = {}; //= {"Aragorn's Orc BBQ": aragorn, "Lembas by Legolas": legolas, "Frodo's Flapjacks": frodo};


//The drop-down menu
let select = document.getElementById("restaurant-select");
//Stores the currently selected restaurant index to allow it to be set back when switching restaurants is cancelled by user
let currentSelectIndex = select.selectedIndex;
//Stores the current restaurant to easily retrieve data. The assumption is that this object is following the same format as the data included above. If you retrieve the restaurant data from the server and assign it to this variable, the client order form code should work automatically.
let currentRestaurant;
//Stored the order data. Will have a key with each item ID that is in the order, with the associated value being the number of that item in the order.
let order = {};
//Stored order names to be used to post
let orderNAMES = {};


//Called on page load. Initialize the drop-down list, add event handlers, and default to the first restaurant.
function init(){
	genDropDownList();
	document.getElementById("restaurant-select").onchange = selectRestaurant;
}

//Generate new HTML for a drop-down list containing all restaurants.
function genDropDownList(){

	const http = new XMLHttpRequest();
	http.onreadystatechange = () => {
		if(http.readyState === 4 && http.status === 200){
			const rest = JSON.parse(http.responseText);
			let result = '<select name="restaurant-select" id="restaurant-select">';
			rest.forEach(elem => {
				result += `<option value="${elem}">${elem}</option>`

			});
			result += "</select>";
			document.getElementById("restaurant-select").innerHTML = result;
			selectRestaurant();
		}
	};
	http.open("GET","/restaurants",true);
	http.send();
}

//Called when drop-down list item is changed.
function selectRestaurant(){
	let result = true;

	//If order is not empty, confirm the user wants to switch restaurants.
	if(!isEmpty(order)){
		result = confirm("Are you sure you want to clear your order and switch menus?");
	}

	//If switch is confirmed, load the new restaurant data
	if(result){

		//Get the selected index and set the current restaurant
		let selected = select.options[select.selectedIndex].value;
		currentSelectIndex = select.selectedIndex;
		//In A2, current restaurant will be data you received from the server
		const http = new XMLHttpRequest();
		http.onreadystatechange = () => {
			if(http.readyState === 4 && http.status === 200){
				currentRestaurant = JSON.parse(http.responseText);

				//Update the page contents to contain the new menu
				document.getElementById("left").innerHTML = getCategoryHTML(currentRestaurant);
				document.getElementById("middle").innerHTML = getMenuHTML(currentRestaurant);

				//Clear the current oder and update the order summary
				order = {};
				orderNAMES = {};
				updateOrder();

				//Update the restaurant info on the page
				let info = document.getElementById("info");
				info.innerHTML = currentRestaurant.name + "<br>Minimum Order: $" + currentRestaurant.min_order + "<br>Delivery Fee: $" + currentRestaurant.delivery_fee + "<br><br>";
			}
		};
		http.open("GET",`/restaurants/${encodeURI(selected)}`,true);
		http.send();

	}else{
		//If they refused the change of restaurant, reset the selected index to what it was before they changed it
		let select = document.getElementById("restaurant-select");
		select.selectedIndex = currentSelectIndex;

	}
}

//Given a restaurant object, produces HTML for the left column
function getCategoryHTML(rest){
	let menu = rest.menu;
	let result = "<b>Categories<b><br>";
	Object.keys(menu).forEach(key =>{
		result += `<a href="#${key}">${key}</a><br>`;
	});
	return result;
}

//Given a restaurant object, produces the menu HTML for the middle column
function getMenuHTML(rest){
	let menu = rest.menu;
	let result = "";
	//For each category in the menu
	Object.keys(menu).forEach(key =>{
		result += `<b>${key}</b><a name="${key}"></a><br>`;
		//For each menu item in the category
		Object.keys(menu[key]).forEach(id => {
			item = menu[key][id];
			result += `${item.name} (\$${item.price}) <img src='add.jpg' style='height:20px;vertical-align:bottom;' onclick='addItem(${id})'/> <br>`;
			result += item.description + "<br><br>";
		});
	});
	return result;
}

//Responsible for adding one of the item with given id to the order and updating the summary
function addItem(id){
	if(order.hasOwnProperty(id)){
		order[id] += 1;
	}else{
		order[id] = 1;
	}
	updateOrder();
	let itemR = getItemById(id);
	if(orderNAMES.hasOwnProperty(itemR.name)){
		orderNAMES[itemR.name] += 1;
	} else {
		orderNAMES[itemR.name] = 1;
	}
}

//Responsible for removing one of the items with given id from the order and updating the summary
function removeItem(id){
	if(orderNAMES.hasOwnProperty("Subtotal") === false){
		orderNAMES["Subtotal"] = 0;
	}
	if(order.hasOwnProperty(id)){
		order[id] -= 1;
		if(order[id] <= 0){
			delete order[id];
		}
		updateOrder();
	}
	let itemR = getItemById(id);
	if(orderNAMES.hasOwnProperty(itemR.name)){
		orderNAMES[itemR.name] -= 1;
		if(orderNAMES[itemR.name] <= 0){
			delete orderNAMES[id];
		}
	}
}

//Reproduces new HTML containing the order summary and updates the page
//This is called whenever an item is added/removed in the order
function updateOrder(){
	let result = "";
	let subtotal = 0;

	//For each item ID currently in the order
	Object.keys(order).forEach(id =>{
		if(id != "Subtotal"){
			//Retrieve the item from the menu data using helper function
			//Then update the subtotal and result HTML
			let item = getItemById(id);
			subtotal += (item.price * order[id]);
			result += `${item.name} x ${order[id]} (${(item.price * order[id]).toFixed(2)}) <img src='remove.jpg' style='height:15px;vertical-align:bottom;' onclick='removeItem(${id})'/><br>`;

		}
	});

	//Add the summary fields to the result HTML, rounding to two decimal places
	result += `Subtotal: \$${subtotal.toFixed(2)}<br>`;
	result += `Tax: \$${(subtotal*0.1).toFixed(2)}<br>`;
	result += `Delivery Fee: \$${currentRestaurant.delivery_fee.toFixed(2)}<br>`;
	let total = subtotal + (subtotal*0.1) + currentRestaurant.delivery_fee;
	result += `Total: \$${total.toFixed(2)}<br>`;

	//Decide whether to show the Submit Order button or the Order X more label
	if(subtotal >= currentRestaurant.min_order){
		result += `<button type="button" id="submit" onclick="submitOrder()">Submit Order</button>`
	}else{
		result += `Add \$${(currentRestaurant.min_order - subtotal).toFixed(2)} more to your order.`;
	}

	orderNAMES["Subtotal"] = total;

	document.getElementById("right").innerHTML = result;
}

//Simulated submitting the order
function submitOrder(){
	const http = new XMLHttpRequest();
	http.onreadystatechange = () => {
		if(http.readyState === 4 && http.status === 201){

			alert("Order placed!");
			//Resetting both orders and orderNAMES
			order = {};
			orderNAMES = {};
			selectRestaurant();
		}
	}
	orderNAMES["curRestaurant"] = currentRestaurant.name;
	console.log(orderNAMES);
	http.open("POST","/order",true);
	http.send(JSON.stringify(orderNAMES));

}

//Helper function. Given an ID of an item in the current restaurant's menu, returns that item object if it exists.
function getItemById(id){
	let categories = Object.keys(currentRestaurant.menu);
	for(let i = 0; i < categories.length; i++){
		if(currentRestaurant.menu[categories[i]].hasOwnProperty(id)){
			return currentRestaurant.menu[categories[i]][id];
		}
	}
	return null;
}

//Helper function. Returns true if object is empty, false otherwise.
function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

//Function to easily import an HTML file to another HTML
function impHTML() {

  let http;
  let file;
  let placeholder;
  let element;

  placeholder = document.getElementsByTagName("*");

  for(let i = 0; i < placeholder.length; ++i){
    element = placeholder[i];

    file = element.getAttribute("import-HTML");

		//Making a get request to obtain the other html file if the file exists
    if (file){
      http = new XMLHttpRequest();
      http.onreadystatechange = function() {
        if (http.readyState == 4) {

          if (http.status == 200) {
            element.innerHTML = http.responseText;
          }
          if (http.status == 404) {
            element.innerHTML = "not found";
          }
          element.removeAttribute("import-HTML");
          impHTML();
        }
      }
      http.open("GET", file, true);
      http.send();
      return;
    }
  }
};

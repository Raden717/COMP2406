let aragorn = {
	name: "Aragorn's Orc BBQ", //The name of the restaurant
	min_order: 20, //The minimum order amount required to place an order
	delivery_charge: 5, //The delivery charge for this restaurant
	//The menu
	menu: {
		//First category
		"Appetizers": {
			//First item of this category
			0: {
				name: "Orc feet",
				description: "Seasoned and grilled over an open flame.", //
				price: 5.50
			},
			1: {
				name: "Pickled Orc fingers",
				description: "Served with warm bread, 5 per order.",
				price: 4.00
			},
			2: { //Thank you Kiratchii
				name: "Sauron's Lava Soup",
				description: "It's just really spicy water.",
				price: 7.50
			},
			3: {
				name: "Eowyn's (In)Famous Stew",
				description: "Bet you can't eat it all.",
				price: 0.50
			},
			4: {
				name: "The 9 rings of men.",
				description: "The finest of onion rings served with 9 different dipping sauces.",
				price: 14.50
			}
		},
		"Combos": {
			5: {
				name: "Buying the Farm",
				description: "An arm and a leg, a side of cheek meat, and a buttered biscuit.",
				price: 15.99
			},
			6: {
				name: "The Black Gate Box",
				description: "Lots of unidentified pieces. Serves 50.",
				price: 65.00
			},
			7: {//Thanks to M_Sabeyon
				name: "Mount Doom Roast Special with Side of Precious Onion Rings.",
				description: "Smeagol's favorite.",
				price: 15.75
			},
			8: { //Thanks Shar[TA]
				name: "Morgoth's Scorched Burgers with Chips",
				description: "Blackened beyond recognition.",
				price: 13.33

			},
			10: {
				name: "Slab of Lurtz Meat with Greens.",
				description: "Get it while supplies last.",
				price: 17.50
			},
			11: {
				name: "Rangers Field Feast.",
				description: "Is it chicken? Is it rabbit? Or...",
				price: 5.99
			}
		},
		"Drinks": {
			12: {
				name: "Orc's Blood Mead",
				description: "It's actually raspberries - Orc's blood would be gross.",
				price: 5.99
			},
			13: {
				name: "Gondorian Grenache",
				description: "A fine rose wine.",
				price: 7.99
			},
			14: {
				name: "Mordor Mourvedre",
				description: "A less-fine rose wine.",
				price: 5.99
			}
		}
	}
};

let legolas = {
	name: "Lembas by Legolas",
	min_order: 15,
	delivery_charge: 3.99,
	menu: {
		"Lembas": {
			0: {
				name: "Single",
				description: "One piece of lembas.",
				price: 3
			},
			1: {
				name: "Double",
				description: "Two pieces of lembas.",
				price: 5.50
			},
			2: {
				name: "Triple",
				description: "Three pieces, which should be more than enough.",
				price: 8.00
			}
		},
		"Combos": {
			3: {
				name: "Second Breakfast",
				description: "Two pieces of lembas with honey.",
				price: 7.50
			},
			4: {
				name: "There and Back Again",
				description: "All you need for a long journey - 6 pieces of lembas, salted pork, and a flagon of wine.",
				price: 25.99
			},
			5: {
				name: "Best Friends Forever",
				description: "Lembas and a heavy stout.",
				price: 6.60
			}
		}
	}
};

let frodo = {
	name: "Frodo's Flapjacks",
	min_order: 35,
	delivery_charge: 6,
	menu: {
		"Breakfast": {
			0: {
				name: "Hobbit Hash",
				description: "Five flapjacks, potatoes, leeks, garlic, cheese.",
				price: 9.00
			},
			1: {
				name: "The Full Flapjack Breakfast",
				description: "Eight flapjacks, two sausages, 3 eggs, 4 slices of bacon, beans, and a coffee.",
				price: 14.00
			},
			2: {
				name: "Southfarthing Slammer",
				description: "15 flapjacks and 2 pints of syrup.",
				price: 12.00
			}

		},
		"Second Breakfast": {
			3: {
				name: "Beorning Breakfast",
				description: "6 flapjacks smothers in honey.",
				price: 7.50
			},
			4: {
				name: "Shire Strawberry Special",
				description: "6 flapjacks and a hearty serving of strawberry jam.",
				price: 8
			},
			5: {
				name: "Buckland Blackberry Breakfast",
				description: "6 flapjacks covered in fresh blackberries. Served with a large side of sausage.",
				price: 14.99
			}
		},
		"Elevenses": {
			6: {
				name: "Lembas",
				description: "Three pieces of traditional Elvish Waybread",
				price: 7.70
			},
			7: {
				name: "Muffins of the Marish",
				description: "A letiety of 8 different types of muffins, served with tea.",
				price: 9.00
			},
			8: {
				name: "Hasty Hobbit Hash",
				description: "Potatoes with onions and cheese. Served with coffee.",
				price: 5.00
			}
		},
		"Luncheon": {
			9: {
				name: "Shepherd's Pie",
				description: "A classic. Includes 3 pies.",
				price: 15.99
			},
			10: {
				name: "Roast Pork",
				description: "An entire pig slow-roasted over a fire.",
				price: 27.99
			},
			11: {
				name: "Fish and Chips",
				description: "Fish - fried. Chips - nice and crispy.",
				price: 5.99
			}
		},
		"Afternoon Tea": {
			12: {
				name: "Tea",
				description: "Served with sugar and cream.",
				price: 3
			},
			13: {
				name: "Coffee",
				description: "Served with sugar and cream.",
				price: 3.50
			},
			14: {
				name: "Cookies and Cream",
				description: "A dozen cookies served with a vat of cream.",
				price: 15.99
			},
			15: {
				name: "Mixed Berry Pie",
				description: "Fresh baked daily.",
				price: 7.00
			}
		},
		"Dinner": {
			16: {
				name: "Po-ta-to Platter",
				description: "Boiled. Mashed. Stuck in a stew.",
				price: 6
			},
			17: {
				name: "Bree and Apple",
				description: "One wheel of brie with slices of apple.",
				price: 7.99
			},
			18: {
				name: "Maggot's Mushroom Mashup",
				description: "It sounds disgusting, but its pretty good",
				price: 6.50
			},
			19: {
				name: "Fresh Baked Bread",
				description: "A whole loaf of the finest bread the Shire has to offer.",
				price: 6
			},
			20: {
				name: "Pint of Ale",
				description: "Yes, it comes in pints.",
				price: 5
			}
		},
		"Supper": {
			21: {
				name: "Sausage Sandwich",
				description: "Six whole sausages served on a loaf of bread. Covered in onions, mushrooms and gravy.",
				price: 15.99
			},
			22: {
				name: "Shire Supper",
				description: "End the day as you started it, with a dozen flapjacks, 5 eggs, 3 sausages, 7 pieces of bacon, and a pint of ale.",
				price: 37.99
			}
		}
	}
};

let restaurants = [aragorn, legolas, frodo];
let restaurantString = ["aragorn", "legolas", "frodo"];

//Global variables to rollback decisions
let previous = 0;
let orderCheck = 0;

//Adds all the restaurants as options
function addRestaurant(){
	//Choice of restaurant
	let choose1 = document.getElementById('menu');

	for(let i = 0; i < restaurants.length;++i){
		let categoryChoice = restaurants[i];
		let newItem = document.createElement("option");
		newItem.setAttribute("value",(restaurantString[i]));
		newItem.text = restaurants[i].name;
		choose1.appendChild(newItem);
	}
}


function main (){


	//Getting reference to simple names
  let name = document.getElementById('column2Title');
  let min_order = document.getElementById('min_order');
  let delivery_charge = document.getElementById('delivery_charge');

	//Placeholder value for the restaurant chosen
	let placeholder = 0;

	//References to all lists within HTML which will then be dynamically added to
	let uLists = [document.getElementById("categories"),document.getElementById("menuitem"),document.getElementById("summary"),document.getElementById("totals")];

	//Checking how many itmes are in each list created
	let count = document.getElementById("categories").childElementCount;
	let count2 = document.getElementById("menuitem").childElementCount;
	let count3 = document.getElementById("summary").childElementCount;
	let count4 = document.getElementById("totals").childElementCount;


	let choose = document.getElementById("menu");
	if(orderCheck == 0){ //Prevents this code from running since it was an order and it should clear no matter what
		if(count3 > 0){ //Sees if there are items in the order, which then prompt user to make sure they want to switch restaurants
			if(confirm("Press OK if you are sure in canceling your order")){
				placeholder = 0;
				previous = choose.selectedIndex;
				if (choose.value == "aragorn") {
					placeholder = aragorn;
				}
				if (choose.value == "legolas") {
					placeholder = legolas;
				}
				if (choose.value == "frodo") {
					placeholder = frodo;
				}
				if (choose.value == ""){
					placeholder = "";
				}
			} else {
				choose.selectedIndex = previous;
				return;
			}
		} else { //No restaurants have been chosen yet
			placeholder = 0;
			previous = choose.selectedIndex;
			if (choose.value == "aragorn") {
				placeholder = aragorn;
			}
			if (choose.value == "legolas") {
				placeholder = legolas;
			}
			if (choose.value == "frodo") {
				placeholder = frodo;
			}

		}
	}

	orderCheck = 0; //Updates orderCheck back to defualt value

	clear(); //Clears the page

	//Checks if the placeholder value is one of the three options
	if(placeholder == aragorn || placeholder == legolas || placeholder == frodo){
		name.innerHTML = placeholder.name;
		min_order.innerHTML = placeholder.min_order.toFixed(2);
		delivery_charge.innerHTML = placeholder.delivery_charge.toFixed(2);
	} else { //If not default to no values
		name.innerHTML = "";
		min_order.innerHTML = "";
		delivery_charge.innerHTML = "";
	}
		let keys = 0;
		if(placeholder == aragorn || placeholder == legolas || placeholder == frodo){
			keys = Object.keys(placeholder.menu); //No need for limitations here as if it's 0, there are no keys which prevent the next code from running
		} else {
			keys = 0;
		}

		for(let i = 0; i < keys.length;++i){ //Loops through key items (menu categories)

			const catKey = Object.keys(placeholder.menu[keys[i]]);
			let categoryChoice = keys[i];
			let li = document.createElement("li");
			li.setAttribute('id',categoryChoice);
			li.appendChild(document.createTextNode(categoryChoice));
			li.style.fontWeight = 'bold';
			uLists[1].appendChild(li);

			for(let x = 0; x < catKey.length;++x){ //Loops through key items in categories and adds them alongside the buttons

				let menuItem = placeholder.menu[keys[i]][catKey[x]].name;
				menuItem += ' ($' + (placeholder.menu[keys[i]][catKey[x]].price).toFixed(2) +')';
				let menuItemel = document.createElement("li");
				menuItemel.setAttribute('id',menuItem);
				menuItemel.appendChild(document.createTextNode(menuItem));
				let button = document.createElement("button");
				button.innerHTML = '<img src="add.jpg" width = "15" height = "15"/>';
				menuItemel.appendChild(button);

				let cuurentPrice = placeholder.menu[keys[i]][catKey[x]].price;
				let currentItem = placeholder.menu[keys[i]][catKey[x]].name;

				button.addEventListener("click", function(){ //Button which checks if someone wants to add to order
					var itemCheck = document.getElementById(1+currentItem);

				if(uLists[2].contains(itemCheck)){ //Checks if item already exists in order and updates everything that it affects


					//Updating each item by referencing
					let totalNoTaxID = document.getElementById("totalpriceNoTAX");
					let placeholdertotalNoTaxID = totalNoTaxID.innerHTML.split(" ").pop();
					placeholdertotalNoTaxID = (+cuurentPrice + +placeholdertotalNoTaxID);
					totalNoTaxID.innerHTML = "SubTotal: $ " + placeholdertotalNoTaxID.toFixed(2);

					let itemCount= document.getElementById(currentItem+cuurentPrice+1);
					let placeholderitemCount= itemCount.innerHTML.split(":").pop();
					placeholderitemCount= +1 + +placeholderitemCount;
					itemCount.innerHTML = "Qty: " + placeholderitemCount;

					let itemCountCost = document.getElementById(currentItem+cuurentPrice+2);
					let newVal = +placeholderitemCount* +cuurentPrice;
					let roundedVal = newVal.toFixed(2);
					itemCountCost.innerHTML = "$ "+roundedVal;

					let totalTaxID = document.getElementById("totalTax");
					let placeholdertotalTaxID = totalTaxID.innerHTML.split(" ").pop();
					placeholdertotalTaxID = (+cuurentPrice*.10.toFixed(2) + +placeholdertotalTaxID);
					totalTaxID.innerHTML = "HST 10%:			 $ " + placeholdertotalTaxID.toFixed(2);

					let totalPriceID = document.getElementById("totalPrice");
					let placeholderTotal = totalPriceID.innerHTML.split(" ").pop();
					placeholderTotal = +cuurentPrice.toFixed(2)*.10 + +placeholderTotal + +cuurentPrice.toFixed(2);
					totalPriceID.innerHTML = "Total:			 $ " + (+placeholderTotal.toFixed(2)).toFixed(2);

					//Conditions to see if min order needed needs to update or be removed to add the order button
					if (+placeholdertotalNoTaxID >= +placeholder.min_order && (+placeholdertotalNoTaxID - cuurentPrice) <= +placeholder.min_order){
						uLists[3].removeChild(orderNO);
						let orderButton = document.createElement("button");
						orderButton.setAttribute('id',"orderButton");
						orderButton.innerHTML = '<img src="order.png" width = "200" height = "100"/>';
						orderButton.addEventListener("click", function() {
							order();
						})
						uLists[3].appendChild(orderButton);
					} else {
						let orderNOup = document.getElementById("orderNO");
						orderNOup.innerHTML = ("Need $ " + (+placeholder.min_order - +placeholdertotalNoTaxID).toFixed(2) + " to meet minimum order");
					}

				} else { //If item doesn't exist, creates a new item in the order

						let item1 = document.createElement("li");
						item1.setAttribute('id',1+currentItem);		//Adding one to ID's as if I didn't, previous items will have same ID
						item1.appendChild(document.createTextNode(currentItem));
						let item2 = document.createElement("li");
						item2.setAttribute('id',currentItem+cuurentPrice+1);
						item2.appendChild(document.createTextNode("Qty: " + 1));
						uLists[2].appendChild(item2);
						let item3 = document.createElement("li");
						item3.setAttribute('id',currentItem+cuurentPrice+2);
						item3.appendChild(document.createTextNode("$ " +(cuurentPrice.toFixed(2))) );
						item3.style.paddingBottom = 15;
						count4 = document.getElementById("totals").childElementCount; //Updating count of list
						let buttonR = document.createElement("button");
						buttonR.innerHTML = '<img src="remove.jpg" width = "15" height = "15"/>';
						item1.appendChild(buttonR);


						//I Tried using an external function to place in here but i couldnt get it to work for the life of me
						buttonR.addEventListener("click", function(){ //Button added along side creaeted item to have the option to remove from the Order

							//Updating values related to the current Item which then only affects the item with the button
							let updateREM = document.getElementById(currentItem+cuurentPrice+1);
							let placeholderUpdateREM = updateREM.innerHTML.split(":").pop();
							placeholderUpdateREM = +placeholderUpdateREM - +1;

							let update1REM = document.getElementById(currentItem+cuurentPrice+2);
							let newValREM = +placeholderUpdateREM * +cuurentPrice;
							let roundedValREM = newValREM.toFixed(2);

							let totalPriceIDREM = document.getElementById("totalPrice");
							let placeholderTotalREM = totalPriceIDREM.innerHTML.split(" ").pop();
							placeholderTotalREM = +placeholderTotalREM - +cuurentPrice - +cuurentPrice*.10.toFixed(2) ;

							let totalpriceNoTAXIDREM = document.getElementById("totalpriceNoTAX");
							let totalpriceNoTAXREM = totalpriceNoTAXIDREM.innerHTML.split(" ").pop();
							totalpriceNoTAXREM = +totalpriceNoTAXREM - +cuurentPrice ;

							let totalTaxIDREM = document.getElementById("totalTax");
							let totalTaxREM = totalTaxIDREM.innerHTML.split(" ").pop();
							totalTaxREM = +totalTaxREM - +cuurentPrice*.10 ;
							if((+totalpriceNoTAXREM <= +placeholder.min_order) && (+totalpriceNoTAXREM + cuurentPrice) <= +placeholder.min_order){
								let orderNOup = document.getElementById("orderNO");

								orderNOup.innerHTML = ("Need $ " + (+placeholder.min_order - +totalpriceNoTAXREM).toFixed(2) + " to meet minimum order");
							} else if ((+totalpriceNoTAXREM <= +placeholder.min_order) && (+totalpriceNoTAXREM + cuurentPrice) >= +placeholder.min_order){
								uLists[3].removeChild(orderButton);
								let orderNO = document.createElement("li");
								orderNO.setAttribute('id',"orderNO");
								orderNO.innerHTML = ("Need $ " + (+placeholder.min_order - +totalpriceNoTAXREM).toFixed(2) + " to meet minimum order");
								uLists[3].appendChild(orderNO);
							}



							if(placeholderUpdateREM === 0){//If the quantity of the value is 0, removes item from order
								totalPriceIDREM.innerHTML = "$ " + placeholderTotalREM.toFixed(2);

								uLists[2].removeChild(item1);
								uLists[2].removeChild(item2);
								uLists[2].removeChild(item3);

								let deliveryDEL = document.getElementById("totalDel");
								let deliveryDELR = deliveryDEL.innerHTML.split(" ").pop();
								deliveryDELR = (+deliveryDELR + +deliveryDELR*.10).toFixed(2);
								if(placeholderTotalREM.toFixed(2) == deliveryDELR){
									for(let r = 0; r < 6; r++){
									uLists[3].removeChild(uLists[3].childNodes[0]);
									}
								} else {
									totalPriceIDREM.innerHTML = "Total: $ " + placeholderTotalREM.toFixed(2);
									totalTaxIDREM.innerHTML = "HST 10%: " + totalTaxREM.toFixed(2);
									totalpriceNoTAXIDREM.innerHTML = "SubTotal: $ " + totalpriceNoTAXREM.toFixed(2);
								}

							} else {
									totalPriceIDREM.innerHTML = "Total: $ " + placeholderTotalREM.toFixed(2);
									totalTaxIDREM.innerHTML = "HST 10%: " + totalTaxREM.toFixed(2);
									totalpriceNoTAXIDREM.innerHTML = "SubTotal: $ " + totalpriceNoTAXREM.toFixed(2);
									updateREM.innerHTML = "Qty: " + placeholderUpdateREM;
									update1REM.innerHTML = "$ "+roundedValREM;
							}


						});

						uLists[2].appendChild(item1);	//Adding all the new values to the summary
						uLists[2].appendChild(item2);
						uLists[2].appendChild(item3);

						if(count4 === 0){ //Checks if nothing is on order summary, which then adds the subtotals,total,tax,delivery charge

							let totalpriceNoTAX = document.createElement("li");
							totalpriceNoTAX.setAttribute('id',"totalpriceNoTAX");
							totalpriceNoTAX.appendChild(document.createTextNode("SubTotal: $ " + cuurentPrice.toFixed(2) ));
							uLists[3].appendChild(totalpriceNoTAX);
							let totalDel = document.createElement("li");
							totalDel.setAttribute('id',"totalDel");
							totalDel.appendChild(document.createTextNode("Delivery:			 $ " + placeholder.delivery_charge.toFixed(2)));
							let totalTax = document.createElement("li");
							totalTax.setAttribute('id',"totalTax");
							totalTax.appendChild(document.createTextNode("HST 10%:			 $ " + (((+cuurentPrice.toFixed(2) + +placeholder.delivery_charge.toFixed(2))*0.10)).toFixed(2)));

							let totalprice = document.createElement("li");
							totalprice.setAttribute('id',"totalPrice");
							totalprice.appendChild(document.createTextNode("Total: 			$ " + (+cuurentPrice.toFixed(2) + +placeholder.delivery_charge + +cuurentPrice*0.10 + +placeholder.delivery_charge*0.10).toFixed(2)));

							uLists[3].appendChild(totalDel);
							uLists[3].appendChild(totalTax);//Placed Here for formattin reasons
							uLists[3].appendChild(totalprice);

							//Conditions to see if min order needed needs to update or remove the order button
							if(+cuurentPrice >= +placeholder.min_order){
								let orderButton = document.createElement("button");
								orderButton.setAttribute('id',"orderButton");
								orderButton.innerHTML = '<img src="order.png" width = "200" height = "100"/>';
								orderButton.addEventListener("click", function() {
									order();
								})
								uLists[3].appendChild(orderButton);
							} else {
								let orderNO = document.createElement("li");
								orderNO.setAttribute('id',"orderNO");
								orderNO.innerHTML = ("Need $ " + (+placeholder.min_order - +cuurentPrice).toFixed(2) + " to meet minimum order");
								uLists[3].appendChild(orderNO);
							}



						} else { //Otherwise just updates the order summary

							let totalpriceNoTAX = document.getElementById("totalpriceNoTAX");
							let placeholdertotalpriceNoTAX = totalpriceNoTAX.innerHTML.split(" ").pop();
							placeholdertotalpriceNoTAX = +cuurentPrice + +placeholdertotalpriceNoTAX;
							totalpriceNoTAX.innerHTML = "SubTotal: $ " + placeholdertotalpriceNoTAX.toFixed(2);

							let totalTaxID = document.getElementById("totalTax");
							let placeholdertotalTaxID = totalTaxID.innerHTML.split(" ").pop();
							placeholdertotalTaxID = (+cuurentPrice*.10.toFixed(2) + +placeholdertotalTaxID);
							totalTaxID.innerHTML = "HST 10%:			 $ " + placeholdertotalTaxID.toFixed(2);

							let totalPriceID = document.getElementById("totalPrice");
							let placeholderTotal = totalPriceID.innerHTML.split(" ").pop();
							placeholderTotal = +cuurentPrice.toFixed(2) + +placeholderTotal;
							totalPriceID.innerHTML = "Total: $ " + (+placeholderTotal.toFixed(2) + +cuurentPrice.toFixed(2)*.10 ).toFixed(2);

							//Conditions to see if min order needed needs to update or the order button
							if(+placeholdertotalpriceNoTAX >= +placeholder.min_order){
								uLists[3].removeChild(orderNO);
								let orderButton = document.createElement("button");
								orderButton.setAttribute('id',"orderButton");
								orderButton.innerHTML = '<img src="order.png" width = "200" height = "100"/>';
								orderButton.addEventListener("click", function() {
									order();
								})
								uLists[3].appendChild(orderButton);
							} else {
								let orderNOup = document.getElementById("orderNO");
								orderNOup.innerHTML = ("Need $ " + (+placeholder.min_order - +placeholdertotalpriceNoTAX).toFixed(2) + " to meet minimum order");
							}
						}
						count3 = document.getElementById("totals").childElementCount; //Updating list count

						}

					});

				uLists[1].appendChild(menuItemel); //This adds the item to the menu category
				let itemDesc = placeholder.menu[keys[i]][catKey[x]].description; //Creating the description to also be added but since it's jsut text nothing complicated here
				let itemDescel = document.createElement("li");
				itemDescel.setAttribute('id',itemDesc);
				itemDescel.appendChild(document.createTextNode(itemDesc));
				itemDescel.style.paddingBottom = 15;
				uLists[1].appendChild(itemDescel);

			} // END INNER FOR LOOP

		} //END FOR LOOP

		for(let i = 0; i < keys.length;++i){ //Adding the categories after the menu items to then hyperlink them
			let categoryChoice = keys[i];
			let a = document.createElement("a");
			let newItem = document.createElement("li");

			a.textContent = categoryChoice;
			a.setAttribute('href', "#"+categoryChoice);
			newItem.appendChild(a);
			uLists[0].appendChild(newItem);
		}

		function order(){ //Function for ordering
			orderCheck = 1;
			choose.selectedIndex = "";
			alert("Your Order has been placed, it will hopefully come at some point");
			main();
		}

		function clear(){ //Function for clearing everything on the page
			if(count > 0){
				for(let x = 0; x < count; ++x){
					uLists[0].removeChild(uLists[0].childNodes[0]);
				}
				count = document.getElementById("categories").childElementCount;
				//This is to double check if it's empty.
				if(count > 0){
					uLists[0].removeChild(uLists[0].childNodes[0]);
				}
			}

			if(count2 > 0){
				for(let x = 0; x < count2; ++x){
					uLists[1].removeChild(uLists[1].childNodes[0]);
				}
				count2 = document.getElementById("menuitem").childElementCount;
				//This is to double check if it's empty.
				if(count2 > 0){
					uLists[1].removeChild(uLists[1].childNodes[0]);
				}
			}

			if(count3 > 0){
				for(let x = 0; x < count3; ++x){
					uLists[2].removeChild(uLists[2].childNodes[0]);
				}
				count3 = document.getElementById("summary").childElementCount;
				//This is to double check if it's empty.
				if(count3 > 0){
					uLists[2].removeChild(uLists[2].childNodes[0]);
				}
			}

			if(count4 > 0){
				for(let x = 0; x < count4; ++x){
					uLists[3].removeChild(uLists[3].childNodes[0]);
				}
				count4 = document.getElementById("totals").childElementCount;
				//This is to double check if it's empty.
				if(count4 > 0){
					uLists[3].removeChild(uLists[3].childNodes[0]);
				}
			}
		}
}

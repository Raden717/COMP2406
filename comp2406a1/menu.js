
function restaurant (){

  //Choice of restaurant
  let choose = document.getElementById('menu');

  let name = document.getElementById('name');
  let min_order = document.getElementById('min_order');
  let delivery_charge = document.getElementById('delivery_charge');



  if (choose.value == "aragorn") {

    name.innerHTML = "aragorn";
    min_order.innerHTML = "20";
    delivery_charge.innerHTML = "5";

  } else if (choose.value == "frodo") {

    name.innerHTML = "Frodo's Flapjacks";
    min_order.innerHTML = "35";
    delivery_charge.innerHTML = "6";

  } else if (choose.value == "legolas") {

    name.innerHTML = "Lembas by Legolas";
    min_order.innerHTML = "15";
    delivery_charge.innerHTML = "3.99";

  }
}

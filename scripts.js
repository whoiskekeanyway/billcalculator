/* Written by Ogundele Olalekan
Task 13 for Hyperion Web Dev Bootcamp
written on 15-03-2020 */

// Object to store drink menu
function Drinks(brand, price) {
  this.brand = brand;
  this.price = price;
}

let drink01 = new Drinks("Cocacola", 25);
let drink02 = new Drinks("Lipton", 32);
let drink03 = new Drinks("Strawberry Smoothie", 44);
let drink04 = new Drinks("Flying Fish", 70);
let drink05 = new Drinks("Red Wine", 200);
var totalAmount = 0;

// Object to store Food Menu
function Food(name, price) {
  this.name = name;
  this.price = price;
}

let food01 = new Food("Burger", 80);
let food02 = new Food("Chicken Wings", 110);
let food03 = new Food("Steak", 300);
let food04 = new Food("Pork ribs", 160);
let food05 = new Food("Grilled Fish", 75);

// Function to prompt the drink menu for user to chooose

function drinkMenu() {
  let userDrink = prompt(
    "Please Select A Drink\n" +
      "A: " +
      drink01.brand +
      " - R" +
      drink01.price +
      "\n" +
      "B: " +
      drink02.brand +
      " - R" +
      drink02.price +
      "\n" +
      "C: " +
      drink03.brand +
      " - R" +
      drink03.price +
      "\n" +
      "D: " +
      drink04.brand +
      " - R" +
      drink04.price +
      "\n" +
      "E: " +
      drink05.brand +
      " - R" +
      drink05.price
  );

  if (userDrink == "A") {
    totalAmount = totalAmount + drink01.price;
  } else if (userDrink == "B") {
    totalAmount = totalAmount + drink02.price;
  } else if (userDrink == "C") {
    totalAmount = totalAmount + drink03.price;
  } else if (userDrink == "D") {
    totalAmount = totalAmount + drink04.price;
  } else if (userDrink == "E") {
    totalAmount = totalAmount + drink05.price;
  }
}

// Function to prompt the food menu for user to chooose
function foodMenu() {
  let userFood = prompt(
    "Please Select A Food\n" +
      "A: " +
      food01.name +
      " - R" +
      food01.price +
      "\n" +
      "B: " +
      food02.name +
      " - R" +
      food02.price +
      "\n" +
      "C: " +
      food03.name +
      " - R" +
      food03.price +
      "\n" +
      "D: " +
      food04.name +
      " - R" +
      food04.price +
      "\n" +
      "E: " +
      food05.name +
      " - R" +
      food05.price
  );

  if (userFood == "A") {
    totalAmount = totalAmount + food01.price;
  } else if (userFood == "B") {
    totalAmount = totalAmount + food02.price;
  } else if (userFood == "C") {
    totalAmount = totalAmount + food03.price;
  } else if (userFood == "D") {
    totalAmount = totalAmount + food04.price;
  } else if (userFood == "E") {
    totalAmount = totalAmount + food05.price;
  }
}

// Function to prompt tip amount for the user

function addTip() {
  let tip = prompt("Please enter your desired Tip Amount:", "");
  const percent = 15;
  let calculateTax = (totalAmount / 100) * percent;
  taxAdded = calculateTax + totalAmount;
  var t = parseFloat(tip);
  totalBill = taxAdded + t;

  result = totalBill

 
  document.getElementById("tax").innerHTML = " TAX"+ "=" + " R " + calculateTax;
  document.getElementById("tip").innerHTML = " TIP" + "=" + " R " + t;
  document.getElementById("bill").innerHTML = "BILL + TAX" +  "=" + " R " + taxAdded;

  document.getElementById("results").innerHTML =
    "Total amount " + " R " + totalBill;
}



/* function billTotal() {



  function addTip() {
    let tip = prompt("Please enter your desired Tip Amount:", "");
    var t = parseFloat(tip);
    console.log(t);
    billTotal = totalAmount + t;
    console.log(billTotal);
    const percent = 15;
    tax = (billTotal / 100) * percent;
    result = tax + billTotal;
    console.log(result);
    
  }
  document.getElementById("tax").innerHTML = "Your tax is 15% = " + " R " + tax;
  document.getElementById("results").innerHTML =
    "Total amount " + " R " + result;
}

*/

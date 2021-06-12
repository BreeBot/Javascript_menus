import createNewIngredient from "./createNewIngredient.js";
import createNewMeal from './createNewMeal.js';
import createNewMenu from "./createNewMenu.js"




console.log("Let's build a diner!")

// Part One

let egg = createNewIngredient('egg', 'protein')
let tomato = createNewIngredient('tomato', 'fruit')
let spinach = createNewIngredient('spinach', 'vegetable')
let mushroom = createNewIngredient('mushroom', 'vegetable')
let feta = createNewIngredient('feta', 'cheese')
let cheddar = createNewIngredient('cheddar', 'cheese')
let bacon = createNewIngredient('bacon', 'meat')

//lunch ingredients
let burger = createNewIngredient('burger', 'meat')
let turkeyBurger = createNewIngredient('turkeyBurger', 'meat')

//dinner ingredients
let chicken = createNewIngredient('chicken', 'meat')
let steak = createNewIngredient('steak', 'meat')

console.log(createNewIngredient)
console.log(createNewMeal)

// Part Two

//breakfast items
let greekOmelette = createNewMeal('Greek Omelette', [egg, tomato, spinach, feta])
let baconCheeseOmelette = createNewMeal('Bacon and Cheese Omelette', [
  cheddar,
  egg,
  bacon
])
let mushroomOmelette = createNewMeal('Mushroom Omelette', [egg, mushroom])

//lunch items
let deluxBurger = createNewMeal('Delux Burger', [burger, cheddar])
let healthyBurger = createNewMeal('Healthy Burger', [turkeyBurger, spinach])

//dinner items
let friedChicken = createNewMeal('Fried Chicken', [chicken, tomato])
let steakDinner = createNewMeal('Steak Dinner', [steak, mushroom])

//Breakfast
//bacon cheese
console.log('baconCheeseOmelette', baconCheeseOmelette);
console.log('Is it vegetarian?')
console.log(baconCheeseOmelette.isVegetarian())
console.log('Is it delicious?')
console.log(baconCheeseOmelette.isDelicious())

//greek
console.log('greekOmelette', greekOmelette);
console.log('Is it vegetarian?')
console.log(greekOmelette.isVegetarian())
console.log('Is it delicious?')
console.log(greekOmelette.isDelicious())

//fungi
console.log('mushroomOmelette', mushroomOmelette);
console.log('Is it vegetarian?')
console.log(mushroomOmelette.isVegetarian())
console.log('Is it delicious?')
console.log(mushroomOmelette.isDelicious())


//Lunch
//Burger
console.log('deluxBurger', deluxBurger);
console.log('Is it vegetarian?')
console.log(deluxBurger.isVegetarian())
console.log('Is it delicious?')
console.log(deluxBurger.isDelicious())

//Turkey Burger
console.log('healthyBurger', healthyBurger);
console.log('Is it vegetarian?')
console.log(healthyBurger.isVegetarian())
console.log('Is it delicious?')
console.log(healthyBurger.isDelicious())


//Dinner
//Fried Chicken
console.log('friedChicken', friedChicken);
console.log('Is it vegetarian?')
console.log(friedChicken.isVegetarian())
console.log('Is it delicious?')
console.log(friedChicken.isDelicious())

//Steak
console.log('steakDinner', steakDinner);
console.log('Is it vegetarian?')
console.log(steakDinner.isVegetarian())
console.log('Is it delicious?')
console.log(steakDinner.isDelicious())

// Part Three

//breakfast menu
let breakfastMenu = createNewMenu('Breakfast', 7, 12)
breakfastMenu.addMeal(greekOmelette)
breakfastMenu.addMeal(baconCheeseOmelette)
breakfastMenu.addMeal(mushroomOmelette)
breakfastMenu.printMenu()

//lunch menu
let lunchMenu = createNewMenu('Lunch', 12, 16)
lunchMenu.addMeal(deluxBurger)
lunchMenu.addMeal(healthyBurger)
lunchMenu.printMenu()

//dinner menu
let dinnerMenu = createNewMenu('Dinner', 16, 24)
dinnerMenu.addMeal(friedChicken)
dinnerMenu.addMeal(steakDinner)
dinnerMenu.printMenu()




// Exceeds Part Two

// let lunchMenu = createNewMenu('Lunch', 12, 16)
// let dinnerMenu = createNewMenu('Dinner', 16, 24)
// let currentMenus = [breakfastMenu, lunchMenu, dinnerMenu]

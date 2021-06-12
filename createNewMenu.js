

let createNewMenu = (title, startTime, endTime) => {
    let newMenu = {
        title,
        startTime,
        endTime,
        meals: [],
        addMeal(meal) {
        this.meals.push(meal)           
        },
        printMenu () {
            console.log(`\n--*--- ${this.title} ---*--\n`)
            console.log(`Served from ${this.startTime} to ${this.endTime}.\n`)
            console.log("Meal options include:")
            this.meals.forEach((meal) => {
                console.log(meal.name)
            })
        }
    } 
    return newMenu 
}

// breakfast could be the integers of 7 to 12, lunch from 12 to 16, 
//and dinner from 16 to 24. 
//Set these attributes as properties of an object. 



// Finally, add an additional method called printMenu
// whose job it is to output the menu in a nice format. This menu should:

// Show the menu title, followed by the timeframe.
// Add the name of each menu item on its own line.
// Print the full menu to the console.








export default createNewMenu
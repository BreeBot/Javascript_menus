let createNewMeal = (name, ingredients) => {
    let newMeal = {
        name,
        ingredients,
        isVegetarian() {
            return !this.ingredients.some((ingredient) => {
                return ingredient.category === "meat"  
            // w/ ! return false if their is an ingrdient with meat  
            })
        },
        isDelicious() {
            return this.ingredients.some((ingredient) => {
                return ingredient.category === "cheese"  
                // w/ ! return false if their is an ingrdient with meat  
            })

        }
         
    }
    return newMeal
}

export default createNewMeal

// isVegetarian should iterate through all of the ingredients of the meal,
// and determine if any of them is in the category "meat". 
// If so, it should return false, but if not, it can return true.

// isDelicious should do the same kind of iteration through the ingredients, 
// but this time, it should check if the meal includes a type of cheese.
//  If so, isDelicious should be true. If not, it should be false.


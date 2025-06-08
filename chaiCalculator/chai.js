function calculateChaiIngredients() {
    const userInput = parseInt(prompt('Karibu! How many cups of Chai Bora would you like to make?'));
    const numberOfCups = Number(userInput)
    if (numberOfCups > 0) {
        calculateChaiIngredients(numberOfCups)
    }
    else{
        console.log("Tafadhali weka nambari halali ya vikombe")
    }
    const waterPerCup = 200 ;
    const milkPerCup =50;
    const teaLeavesPerCup = 1
    const sugarPerCup = 2

    const totalWater = numberOfCups * waterPerCup
    const totalMilk = numberOfCups * milkPerCup
    const totalTeaLeaves = numberOfCups * teaLeavesPerCup
    const totalSugar = numberOfCups * sugarPerCup


    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`)
    console.log(`Water: ${totalWater} ml`)
    console.log(`milk: ${totalMilk} ml`)
    console.log(`Tea Leaves (majani): ${totalTeaLeaves} tablespoon`)
    console.log(`Sugar (sukari): ${totalSugar} teaspoons`)
    console.log(`Enjoy your Chai Bora! = `)

}               


calculateChaiIngredients()
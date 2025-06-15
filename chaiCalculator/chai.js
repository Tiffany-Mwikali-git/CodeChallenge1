function calculateChaiIngredients(numberOfCups) {
    
    const waterPerCup = 200 ; //ml
    const milkPerCup =50;  //ml
    const teaLeavesPerCup = 1 //tablespoon
    const sugarPerCup = 2  //teaspoons

    const Water = numberOfCups * waterPerCup
    const Milk = numberOfCups * milkPerCup
    const TeaLeaves = numberOfCups * teaLeavesPerCup
    const Sugar = numberOfCups * sugarPerCup


    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`)
    console.log(`Water: ${Water} ml`)
    console.log(`milk: ${Milk} ml`)
    console.log(`Tea Leaves (majani): ${TeaLeaves} tablespoon${TeaLeaves > 1 ? 's' : " "}`);
    console.log(`Sugar (sukari): ${Sugar} teaspoons${Sugar > 1 ? "s" : ''}`);
    console.log("Enjoy your Chai Bora!")

}               


//prompt user for input
const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = Number(input);

if (isNaN(numberOfCups)  || numberOfCups <= 0) {
    console.log("please a valid positive number of cups.");
} else {
    calculateChaiIngredients(numberOfCups);
}
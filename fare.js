function calculateBodaFare(distanceInKm) {
    const userInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distanceInKm = Number(userInput);

if (distanceInKm > 0) {
    calculateBodaFare(distanceInKm);
} else {
    console.log("Tafadhali weka nambari halali ya kilomita.");
}
    const baseFare = 50;
    const chargePerKm = 15;

    const totalFare = baseFare + (distanceInKm * chargePerKm);

    
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceInKm * chargePerKm}`);
    console.log(`Total: KES ${totalFare}`);
    console.log(`Panda Pikipiki!`);
}


  calculateBodaFare()
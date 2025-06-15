function calculateBodaFare(distanceInKm) {
    const baseFare = 50;      // KES
    const chargePerKm = 15;   // KES per km
  
    const travelFare = distanceInKm * chargePerKm;
    const totalFare = baseFare + travelFare;
  
    console.log(`Uko wapi?IO ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${travelFare}`);
    console.log(`Total: KES ${totalFare}`);
    console.log(`\n Panda Pikipiki!`);
  }
  
  // Prompt the user for input 
  const input = prompt("Unafika wapi Mzing? Kilometer ngapi?:");
  const distanceInKm = Number(input);
  
  if ( distanceInKm <= 0) {
    console.log("Tafadhali andika namba halali ya kilomita.");
  } else {
    calculateBodaFare(distanceInKm);
  }
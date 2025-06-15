function estimateTransactionFee(amountToSend) {
    const feeRate = 0.015; // 1.5%
    const minFee = 10;
    const maxFee = 70;
  
    // Calculate raw fee
    let fee = amountToSend * feeRate;
  
     // Use if...else to enforce min and max limits
    if (fee < minFee) {
      fee = minFee;
    } else if (fee > maxFee) {
      fee = maxFee;
    }
  
    const totalAmount = amountToSend + fee;
  
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${totalAmount}`);
    console.log(`\nSend Money Securely!`);
  }
  
  // Prompt user for amount 
  const input = prompt("Unatuma Ngapi? (KES):");
  const amountToSend = Number(input);
  
  if (amountToSend <= 0) {
    console.log("Tafadhali weka kiasi halali cha pesa.");
  } else {
    estimateTransactionFee(amountToSend);
  }
function estimateTransactionFee(amountToSend) {
    const userInput = prompt("Unatuma Ngapi? (KES):");
    const amountToSend = Number(userInput);

    if (amountToSend > 0) {
        estimateTransactionFee(amountToSend);
    } else {
        console.log("Tafadhali weka kiasi sahihi cha pesa.");
    }
    const transactionRate = 0.015; 
    const minFee = 10;
    const maxFee = 70;

    
    let fee = amountToSend * transactionRate;


    fee = Math.max(minFee, Math.min(fee, maxFee));

    
    const totalAmount = amountToSend + fee;

    
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${totalAmount}`);
    console.log(`Send Money Securely!`);
}

estimateTransactionFee()



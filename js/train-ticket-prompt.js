const userKmInput = 255;
    const userAgeInput = 40;
    const priceForKm = 0.21;
    const ticketPrice = priceForKm * userKmInput;

    let discount = 0;

    if (userAgeInput < 18) {
        discount = 20;
    } else if (userAgeInput >= 65) {
        discount = 40;
    }

    const discountAmount = (ticketPrice * discount) / 100;
    const discountedTicketPrice = (ticketPrice - discountAmount).toFixed(2);

    console.log(`Il biglietto costa ${ticketPrice}, lo sconto applicato è del ${discount}% (${discountAmount}), ed il prezzo finale da pagare è ${discountedTicketPrice}`);
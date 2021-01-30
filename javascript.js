//function use for  increase count,decrease count and calculate ticket price..
function handleTicketCountChange(product, isIncrease) {
    const ticketClassInput = document.getElementById(product + '-count');
    const ticketClassCount = parseInt(ticketClassInput.value);
    let ticketClassNewCount = 0;
    if (isIncrease == true) {
        ticketClassNewCount = ticketClassCount + 1;
    }
    if (isIncrease == false && ticketClassCount > 0) {
        ticketClassNewCount = ticketClassCount - 1;
    }
    ticketClassInput.value = ticketClassNewCount;
    let ticketClassTotal = 0;
    if (product == 'firstClass') {
        ticketClassTotal = ticketClassNewCount * 150;
    }
    if (product == 'economyClass') {
        ticketClassTotal = ticketClassNewCount * 100;
    }
    calculateTotal();
}


//subtotal,vat grand total calculate  function
function calculateTotal() {
    const firstClassPrice = getInputValue('firstClass');
    const economyClassPrice = getInputValue('economyClass');
    const totalPrice = firstClassPrice * 150 + economyClassPrice * 100;

    const vat = Math.round(totalPrice * 0.10);
    document.getElementById('vat-amount').innerText = vat;
    document.getElementById('subtotal-amount').innerText = totalPrice;

    const grandTotal = totalPrice + vat;
    document.getElementById('grandTotal-amount').innerText = grandTotal;
}


function getInputValue(ticket) {
    const ticketClassInput = document.getElementById(ticket + '-count');
    const ticketClassCount = parseInt(ticketClassInput.value);
    return ticketClassCount;
}


//after booking show confirmation message..
function confirmationMessage() {
    //use getInputValue function to get quantity of tickets
    const firstClassPrice = getInputValue('firstClass');
    document.getElementById('firstClass-price').innerText = firstClassPrice;
    const economyClassPrice = getInputValue('economyClass');
    document.getElementById('economyClass-price').innerText = economyClassPrice;

    const ticketFare = getPriceValue('subtotal');
    document.getElementById('ticket-price').innerText = ticketFare;
    const vatPrice = getPriceValue('vat');
    document.getElementById('vat-price').innerText = vatPrice;
    const grandPrice = getPriceValue('grandTotal')
    document.getElementById('grandTotal-price').innerText = grandPrice;

    document.getElementById('booking').style.display = 'none';
    document.getElementById('confirmation-area').style.display = 'block';
}


//get the price from subtotal,vat,grandTotal
function getPriceValue(price) {
    const ticketPriceInput = document.getElementById(price + '-amount');
    const ticketPriceCount = parseInt(ticketPriceInput.innerText);
    return ticketPriceCount;
}
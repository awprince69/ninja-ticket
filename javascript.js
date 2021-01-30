document.getElementById('add-firstClass-ticket').addEventListener('click', function () {
    handleTicketCountChange('firstClass', true);
})
document.getElementById('minus-firstClass-ticket').addEventListener('click', function () {
    handleTicketCountChange('firstClass', false);
})

document.getElementById('add-economyClass-ticket').addEventListener('click', function () {
    handleTicketCountChange('economyClass', true);
})

document.getElementById('minus-economyClass-ticket').addEventListener('click', function () {
    handleTicketCountChange('economyClass', false);
})

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
    calculateTotal(); //subtotal,vat grand total calculate calling function
}

function calculateTotal() {

    const firstClassPrice = getInputValue('firstClass');
    const economyClassPrice = getInputValue('economyClass');
    const totalPrice = firstClassPrice * 150 + economyClassPrice * 100;

    const vat = Math.round(totalPrice * 0.10);
    document.getElementById('vat-amount').innerText = vat;
    document.getElementById('subtotal-price').innerText = totalPrice;

    const grandTotal = totalPrice + vat;
    document.getElementById('grandTotal-amount').innerText = grandTotal;
}

function getInputValue(ticket) {
    const ticketClassInput = document.getElementById(ticket + '-count');
    const ticketClassCount = parseInt(ticketClassInput.value);
    return ticketClassCount;
}
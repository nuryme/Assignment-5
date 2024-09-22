let noakhaliTotal = 0;
let remaining = 5500;
document.getElementById('noakhali-btn').addEventListener('click', function() {
    const noakhaliInput = parseFloat(document.getElementById('noakhali-input').value);
    const noakhaliDonation = document.getElementById('noakhali-donation');
    const total = parseFloat(document.getElementById('total').innerText);
    
    if(noakhaliInput > total) {
        return alert('You do not have enough money');
    }
    else if(!isNaN(noakhaliInput) || noakhaliInput > 0) {
        noakhaliTotal += noakhaliInput;
        noakhaliDonation.innerText = noakhaliTotal;
        remaining = remaining - noakhaliInput;
        document.getElementById('total').innerText = remaining;
        return remaining;  
    }
    else {
        return alert('invalid Input')
    }
})

let feniTotal = 0;
document.getElementById('feni-btn').addEventListener('click', function() {
    const feniDonation = document.getElementById('feni-donation');
    const feniInput = parseFloat(document.getElementById('feni-input').value);
    const total = parseFloat(document.getElementById('total').innerText);

    if(feniInput > total) {
        return alert('You do not have enough money');
    }
    else if(!isNaN(feniInput) || feniInput > 0) {
        feniTotal += feniInput;
        feniDonation.innerText = feniTotal;
        remaining = remaining - feniInput;
        document.getElementById('total').innerText = remaining;
        return remaining;  
    }
    else {
        return alert('invalid Input')
    }
})
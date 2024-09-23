let noakhaliTotal = 0;
let remaining = 5500;
document.getElementById('noakhali-btn').addEventListener('click', function () {
    const noakhaliInput = gettingElValue('noakhali-input');
    const noakhaliDonation = gettingEl('noakhali-donation');
    const total = gettingElInnerText('total');

    if (noakhaliInput > total) {
        return alert('You do not have enough money');
    }
    else if (!isNaN(noakhaliInput) || noakhaliInput > 0) {

        noakhaliTotal += noakhaliInput;
        noakhaliDonation.innerText = noakhaliTotal;
        remaining = remaining - noakhaliInput;
        document.getElementById('total').innerText = remaining;

        // history
        const historyContent = document.getElementById('history-content');
        const div = document.createElement('div');
        div.className = ('p-8 bg-white border border-gray-100')
        div.innerHTML = `
        <p class="text-xl font-bold">${noakhaliTotal} Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>
        <p class="text-base font-light">Date: ${new Date().toLocaleDateString()}</p>
        `
        historyContent.insertBefore(div, historyContent.firstChild);

        //modal
        const modal = document.getElementById('my_modal_1');
        modal.showModal();

        return remaining
    }
    else {
        return alert('invalid Input')
    }
})

let feniTotal = 0;
document.getElementById('feni-btn').addEventListener('click', function () {
    const feniDonation = gettingEl('feni-donation');
    const feniInput = gettingElValue('feni-input');
    const total = gettingElInnerText('total');

    if (feniInput > total) {
        return alert('You do not have enough money');
    }
    else if (!isNaN(feniInput) || feniInput > 0) {
        feniTotal += feniInput;
        feniDonation.innerText = feniTotal;
        remaining = remaining - feniInput;
        document.getElementById('total').innerText = remaining;

        // history
        const historyContent = document.getElementById('history-content');
        const div = document.createElement('div');
        div.className = ('p-8 bg-white border border-gray-100')
        div.innerHTML += `
        <p class="text-xl font-bold">${feniTotal} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
        <p class="text-base font-light">Date: ${new Date().toLocaleDateString()}</p>
        `
        historyContent.insertBefore(div, historyContent.firstChild);

        //modal
        const modal = document.getElementById('my_modal_1');
        modal.showModal();

        return remaining;
    }
    else {
        return alert('invalid Input')
    }
})

let quotaTotal = 0;
document.getElementById('quota-btn').addEventListener('click', function () {
    const quotaDonation = gettingEl('quota-donation');
    const quotaInput = gettingElValue('quota-input');
    const total = gettingElInnerText('total');

    if (quotaInput > total) {
        return alert('You do not have enough money');
    }
    else if (!isNaN(quotaInput) || quotaInput > 0) {
        quotaTotal += quotaInput;
        quotaDonation.innerText = quotaTotal;
        remaining = remaining - quotaInput;
        document.getElementById('total').innerText = remaining;

        // history
        const historyContent = document.getElementById('history-content');
        const div = document.createElement('div');
        div.className = ('p-8 bg-white border border-gray-100')
        div.innerHTML += `
        <p class="text-xl font-bold">${quotaTotal} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
        <p class="text-base font-light">Date: ${new Date().toLocaleDateString()}</p>
        `
        historyContent.insertBefore(div, historyContent.firstChild);
        
        //modal
        const modal = document.getElementById('my_modal_1');
        modal.showModal();

        return remaining;
    }
    else {
        return alert('invalid Input')
    }
})

//history button
document.getElementById('history-btn').addEventListener('click', function () {
    toggle('history-container');
    togglebg('history-btn', 'donation-btn')
})

//donate button
document.getElementById('donation-btn').addEventListener('click', function () {
    toggle('donate-section');
    togglebg('donation-btn', 'history-btn')
})

const donateBtns = document.querySelectorAll('.donate-btn')

donateBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        handleDonate(e.target)
    })
})

const handleDonate = (button) => {
    const cardElement = button.closest('.custom-card')
    const amountBalance = parseFloat(cardElement.querySelector('.input').value)
    const navBalance = parseFloat(document.getElementById('total').innerText)

    if(isNaN(amountBalance) || amountBalance <= 0 || amountBalance > navBalance) {
        alert('Invalid input')
        cardElement.querySelector('.input').value = ''
        return
    }

    updateNavBalance(amountBalance)

    cardElement.querySelector('.input').value = ''


    const cardBalance = parseFloat(cardElement.querySelector('.card-balance').innerText)
    const cardBalanceUpdate = cardBalance + amountBalance
    cardElement.querySelector('.card-balance').innerText = cardBalanceUpdate.toFixed(2)

    const cardTitle = cardElement.querySelector('.title').innerText
    addToDonationHistory(cardTitle, amountBalance)

    document.getElementById('my_modal_1').showModal()
}

const updateNavBalance = (amountBalance) => {
    const navBalance = parseFloat(document.getElementById('total').innerText)
    const updateBalance = navBalance - amountBalance
    document.getElementById('total').innerText = updateBalance.toFixed(2)
}

const addToDonationHistory = (title, amount) => {
    const historyContainer = document.getElementById('history-container')
    const div = document.createElement('div')
    div.className = ('p-8 bg-white border border-gray-100')
    div.innerHTML = `
    <p class="text-xl font-bold">Title: ${title} </p>
    <p class="text-base font-light">Amount: ${amount} </p>
    <p class="text-base font-light">Date: ${new Date().toLocaleString()}</p>
    `
    historyContainer.appendChild(div)
}



const toggleTab = (donationBtn, historyBtn, donationContainer, historyContainer) => {
    document.getElementById(donationBtn).classList.remove('active')
    document.getElementById(historyBtn).classList.add('active')
    document.getElementById(donationContainer).classList.add('hidden')
    document.getElementById(historyContainer).classList.remove('hidden')

}
document.getElementById('history-btn').addEventListener('click', () => {
    // document.getElementById('donation-btn').classList.remove('active')
    // document.getElementById('history-btn').classList.add('active')
    // document.getElementById('donate-section').classList.add('hidden')
    // document.getElementById('history-container').classList.remove('hidden')

    toggleTab('donation-btn', 'history-btn', 'donate-section', 'history-container')
})
document.getElementById('donation-btn').addEventListener('click', () => {
    // document.getElementById('donation-btn').classList.add('active')
    // document.getElementById('history-btn').classList.remove('active')
    // document.getElementById('donate-section').classList.remove('hidden')
    // document.getElementById('history-container').classList.add('hidden')
    
    toggleTab('history-btn', 'donation-btn', 'history-container', 'donate-section')
})
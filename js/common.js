function gettingElValue(id) {
    return parseFloat(document.getElementById(id).value);
}
function gettingEl(id) {
    return document.getElementById(id);
}
function gettingElInnerText(id) {
    return parseFloat(document.getElementById(id).innerText);
}

function toggle(id) {
    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('history-container').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')
}

function togglebg(adding, removing) {
    const addingStyle = document.getElementById(adding);
    addingStyle.classList.add('bg-primary');
    const removeStyle = document.getElementById(removing);
    removeStyle.classList.add('bg-gray-100')
    removeStyle.classList.remove('bg-primary')
}

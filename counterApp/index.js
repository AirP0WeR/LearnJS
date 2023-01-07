
let count = 0;
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');


function increment() {
    count ++;
    countEl.innerText = count;
}

function save() {
    saveEl.innerText += '\n - ' + count;
    countEl.innerText = 0;
    count = 0;
}
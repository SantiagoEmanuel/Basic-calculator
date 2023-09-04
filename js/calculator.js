const display = document.querySelector('#display');

function addDisplay(value) {
    display.value += value;
}

function numDelete() {
    display.value = display.value.toString().slice(0, -1);
}

function deleteAll() {
    display.value = '';
}

function result() {
    display.value = eval(display.value);
}
module.exports = function toReadable (number) {
    if (number == 0) {
        return 'zero';
    } else {
        return readablehundreds(number).trim()
    }
  
}

let numerals = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function readablehundreds (number) {
    if (number > 99) {
        return numerals[Math.floor(number / 100)] + ' hundred ' + readableTens(number % 100);
    } else {
        return readableTens (number);  
    }
}
function readableTens (number) {
    if (number < 20) {
        return numerals[number];
    } else {
        return tens[Math.floor(number / 10)] + ' ' + numerals[number % 10];
    }
}

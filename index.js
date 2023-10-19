let a = new Date()
let timestamp = a.getTime()
let timestamp_str = timestamp.toString()
let the_obj = {
    '0': [
        '0', '1', '2',
        '3', '4', '5',
        '6'
    ],
    '1': [
        '7', '8', '9',
        'a', 'b', 'c'
    ],
    '2': [
        'e', 'f', 'g',
        'h', 'i', 'j'
    ],
    '3': [
        'l', 'm', 'n',
        'o', 'p', 'q'
    ],
    '4': [
        's', 't', 'u',
        'v', 'w', 'x'
    ],
    '5': [
        'z', 'A', 'B',
        'C', 'D', 'E'
    ],
    '6': [
        'G', 'H', 'I',
        'J', 'K', 'L'
    ],
    '7': [
        'N', 'O', 'P',
        'Q', 'R', 'S'
    ],
    '8': ['U', 'V', 'W', 'X', 'Y', 'd'],
    '9': ['Z', 'T', 'F', 'M', 'y', 'r', 'k']
}
function generate(len) {
    if (len > timestamp_str.length || len < 1) {
        len = timestamp_str.length
    }
    let rand_str = "";
    for (let i = timestamp_str.length - len; i < timestamp_str.length; i++) {
        const randomElement = the_obj[timestamp_str[i]][Math.floor(Math.random() * the_obj[timestamp_str[i]].length)];
        rand_str += randomElement;

    }
    return rand_str
}

module.exports = generate

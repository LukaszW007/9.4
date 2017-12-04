var asterisk = '*',
    array = [];

// count = prompt('How high Christmas tree you wish this year?');

function drawHalfTree(height) {
    for (var i = 1; i <= height; i++) {
        for (var j = 0; j < i; j++) {
            array.push(asterisk);
        }
        console.log(array.join("").toString());
        array = [];
    }
}

function drawTree(height) {
    for (var i = 1; i <= height; i++) {
        for (var g = (height - i - 1); g >= 0; g--) {
            array.push(' ');
        }
        for (var j = 0; j < i; j++) {
            array.push(asterisk);
        }
        for (var z = 0; z < (i-1); z++) {
            array.push(asterisk);
        }
        console.log(array.join("").toString());
        array = [];
    }
}
drawHalfTree(10);

drawTree(10);

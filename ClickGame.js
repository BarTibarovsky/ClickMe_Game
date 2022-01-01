const DOM = {
    totalHitsRef: null,
    totalMissesRef: null,
};

//Settings 
var interval = 600, i = 0;
var i = Math.floor(Math.random() * 500) + 1;
var j = Math.floor(Math.random() * 500) + 1;

function init() {
    DOM.totalHitsRef = document.getElementById("hits");
    DOM.totalMissesRef = document.getElementById("misses");
}

init();

//Buttons visibility intervals
setInterval(function () {
    i++;
    if (i % 2 !== 0) {
        document.getElementById('clickButton').style.visibility = 'visible';
        document.getElementById('clickButton2').style.visibility = 'hidden';
        changeLocation1(`clickButton`);

    } else {
        document.getElementById('clickButton').style.visibility = 'hidden';
        document.getElementById('clickButton2').style.visibility = 'visible';
        changeLocation2(`clickButton2`);
    }
}, interval);

//Buttons locations changes
function changeLocation1() {
    var i = Math.floor(Math.random() * 900) + 1;
    var j = Math.floor(Math.random() * 900) + 1;
    clickButton.style.left = i + "px";
    clickButton.style.top = j + "px";
}

function changeLocation2() {
    var i = Math.floor(Math.random() * 900) + 1;
    var j = Math.floor(Math.random() * 900) + 1;
    clickButton2.style.right = i + "px";
    clickButton2.style.bottom = j + "px";
}

/// score board hits & misses                                                                                                                                                                                                                                                                                                                                                                               
const buttonClicks1 = document.getElementById('button1');
const buttonClicks2 = document.getElementById('button2');

function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
};

function onMouseOver() {
    misses += 1;
    document.getElementById("misses").innerHTML = misses;
};  
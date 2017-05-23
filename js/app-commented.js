//variable to store keypad number entries. Must be cleared after pressing equal button. 
var num = '';
var runningTotalInt = 0;
var runningTotalStr = '';

//print to screen
screen = document.querySelector('#screen');

screen.addEventListener('input', function(evt){
    console.log('fun works');
    console.dir(evt);

}, true);
// screen.value = 0;
console.dir(screen);

//imported code to restrict non calculator characters from being imputted into screen
/* code from qodo.co.uk */
// create as many regular expressions here as you need:
var digitsOnly = /[1234567890]/g;
var floatOnly = /[0-9\.]/g;
var alphaOnly = /[A-Za-z]/g;

function restrictCharacters(myfield, e, restrictionType) {
    console.log('restrictCharacters()');
    console.log(myfield);
    console.log(e);
    console.log(restrictionType);

    if (!e) var e = window.event
    if (e.keyCode) code = e.keyCode;
    else if (e.which) code = e.which;
    var character = String.fromCharCode(code);
    // if they pressed esc... remove focus from field...
    if (code==27) { this.blur(); return false; }
    // ignore if they are press other keys
    // strange because code: 39 is the down key AND ' key...
    // and DEL also equals .
    if (!e.ctrlKey && code!=9 && code!=8 && code!=36 && code!=37 && code!=38 && (code!=39 || (code==39 && character=="'")) && code!=40) {
        if (character.match(restrictionType)) {
            return true;
        } else {
            return false;
        }
    }
}


//variable to add an event listener to each number button
//have to use unicode because numbers and symbol are not viable css properties.
//nums start at unicode 30
//symbols: * = 2A; + = 2B; - = 2D; . = 2E; / = 2F; 
var numEvent = document.querySelectorAll('#\\30 , span#\\31 , span#\\32 ,span#\\33, span#\\34 ,span#\\35 ,span#\\36 ,span#\\37 ,span#\\38 ,span#\\39 ,span#\\2A , span#\\2B , span#\\2D , span#\\2E , span#\\2F');

    for(var i = 0; i < numEvent.length; i++){
        // console.dir(numEvent[i]);
        numEvent[i].addEventListener('click', inputNum,true);
    }

console.dir(numEvent);

//this fuction concatinates the numbers as they are entered.
function inputNum(evt){
    console.dir(evt);
    console.log('inputNum()');
    //have one event on the parent that listens to all the children. The if statement stops the even firing if the parent element is clicked. 
    //From: https://www.kirupa.com/html5/handling_events_for_many_elements.htm
    console.log(event.target.id);
    num += evt.target.id;
    console.log('num in inputNum(): '+num);

    screen.value = num;
    console.dir(screen);
}

equals = document.querySelector('#equals');
equals.addEventListener('click', compute, false);
// console.log(equals);

function compute(evt){
    console.dir(evt);
    console.log('compute()');
    console.log('num in add()'+num);
    
    //concatinate the num Str value onto the end of running total string variable
    runningTotalStr += num;
    //use .eval to find the value of the numbers entered as integers.
    runningTotalInt = eval(runningTotalStr);
    
    //reset the string num value to blank
    num = '';
    screen.value = runningTotalInt;
    console.log('runningTotalInt: '+runningTotalInt);
    console.log('runningTotalStr: '+runningTotalStr);
}

erase = document.querySelectorAll('span#backspace, span#clearNum, span#clearRunning');

    for(var e = 0; e < erase.length; e++){
        console.dir(erase[e]);
        erase[e].addEventListener('click', eraseFun, false);
    }
console.dir(erase);

//function to operate all the delete buttons
function eraseFun(evt){
    console.log('eraseFun()');
    console.dir(evt);
    console.dir(evt.target.id);

    console.log('evt.target');
    console.dir(evt.target);
    console.dir(evt.currentTarget);

    if(evt.target.id === 'backspace'){ 
        console.log('backspaceFun');
        num = num.substring(0, num.length -1);
        console.log('num in backspaceFun: '+num);
        screen.value = num;
    }
    // The CE button clears the entire string
    if(evt.target.id === 'clearNum'){
        console.log('clearNum');
        num = '';
        screen.value = runningTotalInt;
        console.log('num in clearnum: '+num);
    }
    // The CA Button clears the running total var
    if(evt.target.id === 'clearRunning'){
        console.log('clearRunning');
        num = '';
        runningTotalInt = 0;
        runningTotalStr = '';
        screen.value = '';
    }  
}

//variable to store keypad number entries. Must be cleared after pressing equal button. 
var num = '';
var runningTotalInt = 0;
var runningTotalStr = '';

//print to screen
output = document.querySelector('#screen');

//variable to add an event listener to each number button
//have to use unicode because numbers and symbol are not viable css properties.
//nums start at unicode 30
//symbols: * = 2A; + = 2B; - = 2D; . = 2E; / = 2F; 
var numEvent = document.querySelectorAll('span#\\30 , span#\\31 , span#\\32 ,span#\\33, span#\\34 ,span#\\35 ,span#\\36 ,span#\\37 ,span#\\38 ,span#\\39 ,span#\\2A , span#\\2B , span#\\2D , span#\\2E , span#\\2F');

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

    output.value = num;
}

equals = document.querySelector('#equals');
equals.addEventListener('click', compute, false);
// console.log(equals);

function compute(evt){
    console.dir(evt);
    console.log('compute()');
    console.log('num in add()'+num);
    // console.dir(evt);
    
    //find the value of the string as integers
    var numInt = eval(num);
    //concatinate the num Str value onto the end of running total string variable
    runningTotalStr += num;
    //use .eval to find the value of the numbers entered as integers.
    runningTotalInt = eval(runningTotalStr);
    
    //reset the string num value to blank
    num = '';
    output.value = runningTotalInt;
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
        output.value = num;
    }
    // The CE button clears the entire string
    if(evt.target.id === 'clearNum'){
        console.log('clearNum');
        num = '';
        output.value = runningTotalInt;
        console.log('num in clearnum: '+num);
    }
    // The CA Button clears the running total var
    if(evt.target.id === 'clearRunning'){
        console.log('clearRunning');
        runningTotalInt = 0;
        runningTotalStr = '';
        output.value = '';
    }  
}

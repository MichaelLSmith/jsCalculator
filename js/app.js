var num = '';
var runningTotalInt = 0;
var runningTotalStr = '';

//print to screen
screen = document.querySelector('#screen');

equals = document.querySelector('#equals');
equals.addEventListener('click', compute, false);

//variable to add an event listener to each number button
//have to use unicode because numbers and symbol are not viable css properties.
//nums start at unicode 30
//symbols: * = 2A; + = 2B; - = 2D; . = 2E; / = 2F; 
var numEvent = document.querySelectorAll('#\\30 , span#\\31 , span#\\32 ,span#\\33, span#\\34 ,span#\\35 ,span#\\36 ,span#\\37 ,span#\\38 ,span#\\39 ,span#\\2A , span#\\2B , span#\\2D , span#\\2E , span#\\2F');

    for(var i = 0; i < numEvent.length; i++){
        // console.dir(numEvent[i]);
        numEvent[i].addEventListener('click', inputNum,true);
    }

erase = document.querySelectorAll('span#backspace, span#clearNum, span#clearRunning');

    for(var e = 0; e < erase.length; e++){
        erase[e].addEventListener('click', eraseFun, false);
    }
//this fuction concatinates the numbers as they are entered.
function inputNum(evt){
    //have one event on the parent that listens to all the children. The if statement stops the even firing if the parent element is clicked. 
    num += evt.target.id;
    screen.value = num;
}

function compute(evt){
    //concatinate the num Str value onto the end of running total string variable
    runningTotalStr += num;
    //use .eval to find the value of the numbers entered as integers.
    runningTotalInt = eval(runningTotalStr);
    //reset the string num value to blank
    num = '';
    screen.value = runningTotalInt;
}
//function to operate all the delete buttons
function eraseFun(evt){
    if(evt.target.id === 'backspace'){ 
        num = num.substring(0, num.length -1);
        screen.value = num;
    }
    // The CE button clears the entire string
    if(evt.target.id === 'clearNum'){
        num = '';
        screen.value = runningTotalInt;
    }
    // The CA Button clears the running total var
    if(evt.target.id === 'clearRunning'){
        num = '';
        runningTotalInt = 0;
        runningTotalStr = '';
        screen.value = '';
    }  
}

$(document).ready(onReady);

console.log('hey');

function onReady(){
    console.log('hiy');
    $('#buttonBoi').on('click', buttonClick);
    
}

function buttonClick(){
    console.log('in buttonClick');
    $('#backgroundImage').css("background-size", "cover")
}
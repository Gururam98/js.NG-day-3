//math.random 0 to 1 //0.01(1) - 0.99*100=(99) +1
var random=Math.floor(Math.random()*100)+1; //54
//var to calculate how many attempts
var attempt=0;
document.getElementById('btn').addEventListener('click',function(){
    attempt++; //1
    var guess=parseInt(document.getElementById('guessinput').value); //54
    if(guess===random){
        display("Congratulations-"+ attempt);
        document.getElementById('btn').disabled=true;
    }
    else if(guess<random){
        display("Too low");
    }
    else if(guess>random){
        display("Too high");
    }
});
function display(message){
    document.getElementById("msg").textContent=message;}
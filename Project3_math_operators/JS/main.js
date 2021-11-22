function addition_Function() { //creating addition function 
    var addition = 7 + 2.5;//assigning variables to the addition function
    document.getElementById("Math").innerHTML="7 + 2.5 =" + addition;//using addition function and displaying the results

}

function sub_Function() {//creating substraction function
    var sub = 14-7.5;//asiging variable to the function
    document.getElementById("Math2").innerHTML="14-7.5 =" + sub;// using substraction function and dispplaying results

}
function multip_Function() {//creating a multiplication function
    var multip = 5*99;//assigning variables to the function
    document.getElementById("Math3").innerHTML="5 x 99 =" + multip;//using multiplication function and displaying results 

}
function div_Function() { //creating division function
    var div = 144/12;//assigning variables for division function
    document.getElementById("Math4").innerHTML="144 : 12 =" + div; //using division function and displaying results

}
function multiop_math(){ //creating a multioperation math function
    var multiop=(9+6)*2/(8-3);// choosing variables for math functions
    document.getElementById("Math5").innerHTML="9 plus 6 times 2 divided by 8 minus 3 =" + multiop;//using multiple math functions and displaying results
}

function modulus_Operator() { // creating remainder function
    var modulus=100%9; //writing variable for remainder 
    document.getElementById("Math6").innerHTML="When you divide 100 by 9 you have a remainder of: " + modulus; //using remainer function and displaying results in <p>

}

function negat_Op() { //creating negation operator function
    var x =74; //variable that will be negated
    document.getElementById("Math7").innerHTML= -x; //using negation operator
}
document.write("<br>");// breaking lane
var X=5;//assigning variable for increment
X++;//choosing increement
document.write("Step up from 5 is:"+X);//Creating Increment for number 5
document.write("<br>"); //Breaking Line
var Y=74;//writing variable for decrement
Y--;//Choosing decrement
document.write("Step down from 74 is:"+Y);// Creating a decrement for number 74
document.write("<br>"); //Breaking line
window.alert("Random number is :"+Math.random() *1000);// creating window alert with random number from 1-1000

function PI(){ //Creating function PI 
document.getElementById("Math8").innerHTML = Math.PI; //Writing PI Math object
}

function Round() { //creating Round function
document.getElementById("Math9").innerHTML = Math.round(6.672); //   Writing Math object method round and rounding 6.672  
}

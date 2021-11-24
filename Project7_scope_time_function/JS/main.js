if (1<2) {//if statement
    document.write("in 1<2 ");// writing text to be display so page would make some sense
    document.write("The left number is smaller than the number on the right.");//the result of if statement
    document.write("<br>");//break
}
//Global
var X=72;//declaring global variable
function Add_numbers_1(){ // creating function
    document.write(" GLOBAL");
    document.write("<br>");//break
    document.write(" if X=72");// writing text to be display so page would make some sense
    document.write("<br>");//break
    document.write("28+X= ")// writing text to be display so page would make some sense
    document.write(28+X+"<br>");//calculating the function formula and displaying it
}
function Add_numbers_2() {//creating function
   
    document.write("if X=72");//writing text to be display so page would make some sense
    document.write("<br>");//break
    document.write("X+199= ");//writing text to be display so page would make some sense
    document.write(X+199);//calculating the function formula and displaying it
}
Add_numbers_1();//function 1
Add_numbers_2();//function 2


function Add_numbers_3() {//creating a function
    var Y=10;//assigning local variable
    document.write("<br>");//break
    document.write("<br>");//break
    document.write(" LOCAL");
    document.write("<br>");//break
    document.write("if Y=10");// writing text to be display so page would make some sense
    document.write("<br>");//break
    document.write("20+Y= ");// writing text to be display so page would make some sense
    document.write(20+Y+"<br>"); //calculating the function formula and displaying it
    console.log(5+Y);//using console to debug the code
}
function Add_numbers_4() {//creating a function there is no local variable assigned
document.write(Y+100);//because variable is local it will not work on this function and wont display result
console.log(Y+100);//using console to debug the code Console says that Y is not defined and asks 
}
Add_numbers_3();//function 1
Add_numbers_4();//function 2

function get_Date() {//creating function
    if (new Date().getHours()< 18) {//writing if statement conditions
    document.getElementById("Greeting").innerHTML="How are you today?";//if hours are less than 18 it will ask how are you today
}
}
function Comp_Function() {//Creating a comparison function
    var X_val,Y_val;//Creating variables for x and Y
    var Reply;
    X_val=document.getElementById("X_val").value;//defining X value 
    Y_val=document.getElementById("Y_val").value; //defining Y value 
    if (X_val>Y_val) { //writing if statement
        Reply="X > Y";//outcome if X>Y
    }
    else if(X_val<Y_val) {//elseif statement
        Reply="X < Y";//outcome if X<Y
    }
    else { //else statement
        Reply="X = Y";//outcome if values are the same
    }
    
document.getElementById("Result").innerHTML=Reply;//if statement result 
}


function Age_Function() { //creating age function
Years=document.getElementById("Years").value;//assigning Years a value (it will be put by user)
if(Years>=18){//if statement
    Vote="You are old enough to vote!";//if condition result
}    
else {
    Vote="You are not old enough to vote!";//other outcome if "if" condition result doesnt happen

}
document.getElementById("Age_ID").innerHTML=Vote;// display result 
}

function Time_Function() {//creating function
    var Time=new Date().getHours();//assigning variable
    var Reply;//signing variable
    if (Time <12==Time>0) {//if statement
        Reply="It is morning time!";//if statement outcome
}
else if (Time>12== Time<18) {//elseif statement 
    Reply="It is afternoon.";//elseif statement outcome
}
else{ //for anything else
    Reply="It is evening time."; //other outcome for if statement
}
document.getElementById("TOD").innerHTML=Reply; //writing the result in paragraph "TOD" 
}






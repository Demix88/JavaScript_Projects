document.write("A is what type of data? :")//added text to make page more undestandable
document.write(typeof "A");//writing the type of operator to display what data type it is :string
document.write("<br>"); //break
document.write("42 is what type of data? :")//added text to make page more undestandable
document.write(typeof 42);//writing the type of operator to display what data type it is : number
document.write("<br>"); //break
document.write("Is 500 greater than 30? : ");//added text to make page more undestandable
document.write(500>30);// using boolean logic 
document.write("<br>"); //break
document.write("Is 99 lesser than 7? :");//added text to make page more undestandable
document.write(99<7);//using boolean logic 
document.write("<br>"); //break
document.write("is 777=777? : ");//added text to make page more undestandable
document.write(777==777);//using double equal signs on equal numbers
document.write("<br>"); //break
document.write("is 732=657 ? : ");//added text to make page more undestandable
document.write(732==657);//using double equal signs on unequal numbers

//===
document.write("<br>"); //break
document.write("Is 642=642 ? :");
X=642; // assigning X a value 
Y=642;//assigning Y a value 
document.write(X===Y);//using the === to check the symbol on the left is equal to the right and it is

document.write("<br>"); //break
document.write("Is Plane = Plane ? :");
A="plane"; // assigning A a value 
B="plane";//assigning B a value 
document.write(A===B);//using the === to check the symbol on the left is equal to the right and it is
document.write("<br>"); //break
document.write("is 642=plane ? :");//using === to compare 2 different data types
document.write(X===B);//comparing two different data types
document.write("<br>"); //break

document.write("Is 44 = 44? : ");
C=44; // assigning C a value 
D="44";//assigning D a value 
document.write(C===D);// using different data type with the same values
document.write("<br>"); //break
document.write("Is 23>14 and 5>3? :");//added text to make page more undestandable
document.write(23>14 && 5>3); //checking if both comperisons true or false 
document.write("<br>"); //break
document.write("Is 220<4 and 2>3? :");//added text to make page more undestandable
document.write(220<4 && 2>3);//checking if both values are true 
document.write("<br>"); //break

document.write("Is 23>14 or 5<3? :");//added text to make page more undestandable
document.write(23>14 || 5<3); //checking if either of comperisons true or false 
document.write("<br>"); //break
document.write("Is 220>4 or 2>3? :");//added text to make page more undestandable
document.write(220<4 || 2>3);//checking if either of comperisons true or false 

document.write("<br>"); //break
document.write("264"+987);//utilizing coercion to combine both numbers

//Functions

function my_Function() { //creating a function
    document.getElementById("Test").innerHTML=0/0;//using division to display not a number (NaN) as a result for challange 6
}
function my_Function1() { //creating a function
    document.getElementById("Test1").innerHTML= isNaN('Is this the real life?');//utilizing isNaN function to make browser display "true" challange 6
}
function my_Function2() { //creating a function
    document.getElementById("Test2").innerHTML=isNaN('364');//utilizing isNaN function to make browser display "false" for challange 6
}

function my_Function3() { //creating a function
    document.getElementById("Test3").innerHTML=200/0;//using division to get large enough number for infinity
}

function my_Function4() { //creating a function
    document.getElementById("Test4").innerHTML=-400/0;//using division to get large enough number for negative infinity
}

function not_Function() {// Not Function
    document.getElementById("Not").innerHTML=!(5>10);//checking if 5 is not greather than 10 using Not operator
}
function not_Function1() {// Not Function
    document.getElementById("Not1").innerHTML=!(10>2);//checking if 19 is not greather than 2 using Not operator
}




//Console_logs
console.log(12*10);//utilizing the console.log()function


console.log(200<4); //utilizing boolean logic for challenge 7




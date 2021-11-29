//Concat method
function full_Sentence() { //creating Concat() function
    var A="This was ";//writing variables to combine
    var B="Written ";//writing variables to combine
    var C="Using ";//writing variables to combine
    var D="Concat ";//writing variables to combine
    var E="method."//writing variables to combine
    var complete_sentence=A.concat(B,C,D,E); //combining the sentence
    document.getElementById("Concat").innerHTML=complete_sentence;//displaying combined sentence

}
//sliced method
function sliced_sentence() {//creating slice() function
    var Sentence="The Quick Brown Fox Jumps Over The Lazy Dog"; //writing a sentence for slicing
    var Section=Sentence.slice ( 0,10);//selecting the sentence part that wont be erased
    document.getElementById("Slice").innerHTML=Section; //
}
//Challenge 10
//Uppercase
function UPPERCASE() {//creating uppercase function Challenge 10
    let text="Are you talking to me ?";//creating uppercase text
    let result= text.toUpperCase();//utilizing the function
    document.getElementById("uppercase").innerHTML = result; //displaying result
}
//Search
function Search() {//creating search function Challenge 10
    let text = "The Quick Brown Fox Jumps Over The Lazy Dog";//writing a sentence 
    let position = text.search("Fox");//search for a word "Fox"
    document.getElementById("Search").innerHTML = position;// display the position of "fox"
}
//to string method
function string_Method() {//creating number method function
    var A=792;//assigning variable
    document.getElementById("Nr_2_String").innerHTML=A.toString();//displaying the number in string
}
//Precision method 
function precision_Method() {//Creating the precision method function
    var A=9985835.64634754764;//assining number 
    document .getElementById("Precision").innerHTML=A.toPrecision(11); //Rounding number and displaying result
}

//Challenge 11
//fixed method
function Fixed() {//Creating a fixed method function
    var num = 243.124153634534;// assigning variable to the function
    var A = num.toFixed(4);//creating variable to use fixed function
     document.getElementById("fxed").innerHTML = A;// displaying rounded number
     

}
//value of method
function Value() {//creating value function
    var text="This is value method!";//writing a variable sentence
    var result=text.valueOf(); //variable valueof result
    document.getElementById("demo").innerHTML = result;//display the result 
}




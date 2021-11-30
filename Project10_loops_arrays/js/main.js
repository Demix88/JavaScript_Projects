alert(document.getElementById("p1").innerHTML)
function Call_Loop() {//creating a call loop function
  var x =""; //creating variable x
  var y=document.getElementById("x").value;//choosing inputed data as variable
  while (y<101) {// setting up loop that will end once y becomes 100
    x+="<br>"+y;
    y++ //increase y by 1 until it reaches 101
  }
  
document.getElementById("Loop").innerHTML= x;//write the result in Loop paragraph
}

//Challenge 13
var text="Find the length of this sentence!"//sentence used to find the length of
var length= text.length;//assigning variable for length of sentence
document.getElementById("Length_prop").innerHTML="The length of this sentence is: "+length ;//display how many string is in the sentence


//For Loop
var Instruments=["Hammer","Philips screwdriver","Plyers","Saw","Flat screwdriver", "Keys"]; //creating variables for group instruments
var Content="";// variable for content
var Y;// creating variable y
function for_Loop(){ //creating for loop function
  for (Y=0;Y<Instruments.length;Y++) {//defining for function
    Content +=Instruments[Y]+"<br>"; //making the list
  }
document.getElementById("List_of_Instruments").innerHTML=Content;//displaying the list of instruments
}
//array function

function array_Function() {//creating array function
  var favorite_pastime=[];//creating a var group
  favorite_pastime[0]="playing video games";//assigning first array
  favorite_pastime[1]="watching TV";//assigning first array
  favorite_pastime[2]="eating";//assigning second array
  favorite_pastime[3]="sleeping";//assigning third array
  favorite_pastime[4]="walking";//assigning fourth array
  favorite_pastime[5]="reading";//assigning fifth array
document.getElementById("Array").innerHTML="When I'm off work my favorite pastime is " +favorite_pastime[0]+".";//displaying the result
}
//Constant function
function constant_function() {//creating constant function
  const Vehicle={type:"Jeep",make:"Range Rover",color:"White"}; //asigning constants
Vehicle.color="red";//adding more constants 
Vehicle.price="£30000";//adding more constants
document.getElementById("Constant").innerHTML="The cost of the "+Vehicle.color+" " + Vehicle.type + " " +Vehicle.make +" was " + Vehicle.price;// displaying a sentence of combined constants 
}
//Let
let A=42;//assigning variable 
let B=57;//assigning variable 
let C=A+B;//assigning variable 
document.getElementById("Let").innerHTML ="42+57= "+C;//displaying the result of A+B

//Challenge 14
function Pi_Function(){//creating a function
  return Math.PI//making a PI return statement 

}
document.getElementById("PI").innerHTML="The PI is: "+Pi_Function(); //displaying return statement PI

//Objects
let pet ={ //creating object pet
  type:"Dog",//adding properties to object pet
  gender:"female",//adding properties to object pet
  name:"Aisha",//adding properties to object pet
  breed:"Husky",//adding properties to object pet
  dob:"2020",//adding properties to object pet
  color:"white",//adding properties to object pet
description: function() { 
  return "The pet is "+this.color+" "+this.type+" and it's a " +this.gender+" "+this.breed+" who was born - " +this.dob;//this will be returned
}
};
document.getElementById("Pet_Object").innerHTML=pet.description();//displaying the result
//Challenge 
let txt = "";//setting variable for txt
for (let i = 0; i < 10; i++) { //creating a for loop
  if (i === 7) { break; }//creating a break in the loop
  txt+= "The number is " + i + "<br>";//increasing txt value
}
document.getElementById("break").innerHTML = txt;//displaying the loop

//Continue 15
let txt2 = "";//setting variable for txt2
for (let i = 0; i < 24; i++) {//creating a for loop
  if (i === 12) { continue; }//setting a number to skip and then continue
  txt2 += "The number is " + i + "<br>";//increasing txt2 value
}
document.getElementById("Continue").innerHTML = txt2;//displaying the loop





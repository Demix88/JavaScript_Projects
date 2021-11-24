function Ride_function() {//Creating a ride function
    var Height, Can_ride;//Creating variables height and can_ride
    Height=document.getElementById("Height").value;//defining height value  
    Can_ride=(Height<52) ? "You are too short":"You are tall enough";//defining Can ride value
    document.getElementById("Ride").innerHTML=Can_ride+" to ride. "; //checking the typed value and determining which value (can ride or cant ride) to display
}

function Animal(Type, Breed, Age, Color) {//creating a function for animal
    this.Animal_Type=Type; //indicating owner of the Type
    this.Animal_Breed=Breed;//indicating owner of the Breed
    this.Animal_Age=Age;//indicating owner of the age
    this.Animal_Color=Color;//indicating owner of the color
}

var Duffy=new Animal ("Duck","wild duck",84,"Black"); // creating a new object Duffy
var Jojo=new Animal ("Dog","Husky",0,"Black and Grey and White");// creating a new object Jojo
var Bugs_Bunny=new Animal("Rabbit ","Cartoon ",81,"Grey");// creating a new object Bugs_Bunny
var Sylvester=new Animal("Cat","Felis ",50,"Black and White");// creating a new object Sylvester

function my_Function() {//creating new function
    document.getElementById("New_and_This").innerHTML=
    "Duffy The Duck is "+Duffy.Animal_Age+" years old " +Duffy.Animal_Color+" -colored " +Duffy.Animal_Breed+" from "+Duffy.Animal_Type+" Family";
}//displaying the chosen values 

function count_Function(){//Creating the count function
document.getElementById("Nested_Function").innerHTML=Count()//Displaying the count
function Count(){ // creating a function
    var Starting_point=1; //choosing starting point
    function Plus_One() {Starting_point +=4;}//Creating function for a step
    Plus_One();
    return Starting_point; //calculating the result of a step 
}

}








//var true=5; //if assign true as variable the visual studio doesnt accept it
//document.write(true);

function Furniture(Type,Color,Use,Size) {
this.Furniture_Type=Type;
this.Furniture_Color=Color;
this.Furniture_Use=Use;
this.Furniture_Size=Size;
}

var CornerSofa=new Furniture ("Sofa","black"," siting "," Large ");
var DinnerTable=new Furniture ("Table","brown","eating","medium");
var KingsizeBed=new Furniture ("Bed","Black","Sleeping","Xtra Large");
function my_Function() {
document.getElementById("Frntr").innerHTML="CornerSofa is "+CornerSofa.Furniture_Color+" -colored "+ CornerSofa.Furniture_Size+" " +CornerSofa.Furniture_Type+ " that is used for" +CornerSofa.Furniture_Use;
}